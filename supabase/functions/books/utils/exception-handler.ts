import { ErrorResponse } from "../dto/error-response.dto.ts";

export function exceptionHandler(err: Error): Response {
    if (err instanceof ErrorResponse) {
        return new Response(err.message, {status: (err as ErrorResponse).status}) 
    }

    return new Response("internal server error", { status: 500 });
}


