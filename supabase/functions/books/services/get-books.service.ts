import { createClient } from "https://esm.sh/@supabase/supabase-js";
import { SortType } from "../dto/books-request.dto.ts";
import { ErrorResponse } from "../dto/error-response.dto.ts";

const client = await getClient();

export async function getBook(
  authorId: string | null,
  sort: SortType | null,
  page: number,
  limit: number,
) {
  const offset = (page - 1) * limit;

  let query = client
    .from("book")
    .select("title, price, currency, published_at, author_id, author(name)")
    .order("published_at", { ascending: sort === SortType.ASC })
    .range(offset, offset + limit - 1);

  if (authorId != null) {
    query = query.eq("author_id", authorId);
  }

  const { data, error } = await query;

  if (error) {
    throw new ErrorResponse(`books query error: ${error.message}`);
  }

  return data;
}

export async function countBooks(authorId: string | null) {
  let query = client
    .from("book")
    .select("*", { count: "exact", head: true });

  if(authorId != null)
    query = query.eq("author_id", authorId);

  const { count, error } = await query

  if (error) {
    throw new ErrorResponse(`count query error: ${error.message}`);
  }

  return count;
}

async function getClient() {
  const supabaseUrl = "https://djzzyyhkpusbeldxvdqc.supabase.co";
  const supabaseKey = Deno.env.get("SUPABASE_ANON_KEY");
  const supabase = await createClient(supabaseUrl, supabaseKey);

  return supabase;
}
