import { createClient } from "https://esm.sh/@supabase/supabase-js";
import { SortType } from "../dto/books-request.dto.ts";
import {ErrorResponse} from "../dto/error-response.dto.ts";

const client = await getClient()

export async function getBook(
    authorId: string | null,
    sort: SortType | null,
    page: number,
    limit: number,
) {
    const offset = (page - 1) * limit;

    const {data, error} = await client
        .from("book")
        .select("title, price, currency, published_at, author(name)")
        //.eq("author_id", authorId)
        .order("published_at", { ascending: sort === SortType.ASC })
        .range(offset, offset + limit - 1);

    console.dir({data, error})

    if (error)
        throw new ErrorResponse(`books query error: ${error.message}`);

    return data;
}

export async function countBooks(){
    const { count, error } = await client
        .from("book")
        .select("*", { count: "exact", head: true });

    console.dir({ count, error });

    if (error)
        throw new ErrorResponse(`count query error: ${error.message}`);

    return count;
}

async function getClient() {
    const supabaseUrl = "https://djzzyyhkpusbeldxvdqc.supabase.co";
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqenp5eWhrcHVzYmVsZHh2ZHFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUwNTUyMjksImV4cCI6MjA1MDYzMTIyOX0.6WwJz371h4iXREpY57SXu1CxvxvXuDpMMtvWJDTyOYg";
    const supabase = await createClient(supabaseUrl, supabaseKey);

    return supabase;
}
