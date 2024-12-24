import { ErrorResponse } from "../dto/error-response.dto.ts";

export function exceptionHandler(err: Error): Response {
    if (err instanceof ErrorResponse) {
        return new Response(err.message, {status: (err as ErrorResponse).status}) 
    }

    console.log("\n unhandled error")
    console.dir(err)
    console.log("\n")

    return new Response("internal server error", { status: 500 });
}


