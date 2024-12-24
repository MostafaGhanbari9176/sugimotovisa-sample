// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
//import "jsr:@supabase/functions-js/edge-runtime.d.ts"

console.log("Hello from Functions!");

export enum SortType {
  DESC = "DESC",
  ASC = "ASC",
}

Deno.serve(async (req) => {
  try {
    const url = new URL(req.url);
    if (url.pathname != "/books" && req.method == "GET") {
      throw new Error("path not exists not found", {
        cause: { status: 404, message: "not fount" },
      });
    }

    const authorId: string | null = url.searchParams.get("authorId");
    const sort: string | null = url.searchParams.get("sort");
    const page: string = url.searchParams.get("page") || "1";
    const limit: string = url.searchParams.get("limit") || "5";

    const data = {
      authorId,
      sort,
      page,
      limit,
    };

    return new Response(
      JSON.stringify(data),
      { headers: { "Content-Type": "application/json" }, status: 200 },
    );

  } catch (e: any) {
    return new Response(
      JSON.stringify(e.cause),
      {
        status: e.cause.status,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/books' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
