// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { ErrorResponse } from "./dto/error-response.dto.ts";
import { getBooksHandler } from "./handlers/get-books.handler.ts";
import { authentication } from "./utils/authentication.ts";
import { exceptionHandler } from "./utils/exception-handler.ts";
import { validateGetBooks } from "./utils/validation.ts";

// Setup type definitions for built-in Supabase Runtime APIs
//import "jsr:@supabase/functions-js/edge-runtime.d.ts"

Deno.serve(async (req) => {
  try {

    const url = new URL(req.url);

    if (url.pathname == "/books" && req.method == "GET") {

      authentication(req)
      
      const params = validateGetBooks(req)

      const response = getBooksHandler(params)

      return new Response(
        JSON.stringify(response),
        {
          headers:{"Content-Type":"application/json"},
          status:200
        }
      )
    }
    else{
      throw new ErrorResponse("path not exists not found", 404);
    }

  } catch (e: any) {
    return exceptionHandler(e)
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
