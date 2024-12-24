import { createClient } from "@supabase/supabase-js";
import { SortType } from "../dto/books-request.dto.ts";

export async function getBookService(
    authorId: string | null,
    sort: string | null,
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

    if (error) throw new Error(error.message);

    return data;
}

async function getClient() {
    const supabaseUrl = "https://djzzyyhkpusbeldxvdqc.supabase.co";
    const supabaseKey = Deno.env.get("SUPABASE_KEY");
    const supabase = await createClient(supabaseUrl, supabaseKey);

    return supabase;
}
