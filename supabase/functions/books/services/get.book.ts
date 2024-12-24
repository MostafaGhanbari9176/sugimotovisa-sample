import { createClient } from "https://esm.sh/@supabase/supabase-js";
import { SortType } from "../dto/books-request.dto.ts";
import {ErrorResponse} from "../dto/error-response.dto.ts";

export async function getBook(
    authorId: string | null,
    sort: SortType | null,
    page: number,
    limit: number,
) {
    const offset = (page - 1) * limit;

    const { data, error } = await getClient()
        .from("book")
        .select("*, author(name)")
        .eq("author_id", authorId || undefined)
        .order("published_at", { ascending: sort === SortType.ASC })
        .range(offset, offset + limit - 1);

    console.dir({data, error})

    if (error)
        throw new ErrorResponse(`books query error: ${error.message}`);

    return data;
}

export async function countBooks(){
    const { data, error } = await getClient()
        .from("book")
        .select("count(*)")

    console.dir({data, error})

    if (error)
        throw new ErrorResponse(`count query error: ${error.message}`);

    return data;
}

async function getClient() {
    const supabaseUrl = "https://djzzyyhkpusbeldxvdqc.supabase.co";
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqenp5eWhrcHVzYmVsZHh2ZHFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5NTQxMDQsImV4cCI6MjA1MDUzMDEwNH0.7tGBuQTzzdRxEpknK7_C0HwLe3O0VJcCbUmdX3K8Qas";
    const supabase = await createClient(supabaseUrl, supabaseKey);

    return supabase;
}
