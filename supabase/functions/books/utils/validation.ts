import { BooksRequestDTO } from "../dto/books-request.dto.ts";
import { ErrorResponse } from "../dto/error-response.dto.ts";
//import { validate } from "https://deno.land/std@0.224.0/uuid/v4.ts";

enum SortType {
    DESC = "DESC",
    AES = "AES",
}

export function validateGetBooks(req: Request): BooksRequestDTO {
    const url = new URL(req.url);

    const authorId: string | null = url.searchParams.get("authorId");
    const sort: string | null = url.searchParams.get("sort");
    const page: string = url.searchParams.get("page") || "1";
    const limit: string = url.searchParams.get("limit") || "5";

    if (authorId != null) {
        //if(uuid.validate(authorId))
        //throw new ErrorResponse(`authorId is not a valid UUID`, 400)
    }

    if (sort != null) {
        if (sort != SortType.DESC && sort != SortType.AES) {
            throw new ErrorResponse(`sort must be one of ${SortType}`, 400);
        }
    }

    if (!Number.isInteger(page)) {
        throw new ErrorResponse(`page must be a number`, 400);
    }

    if (!Number.isInteger(limit)) {
        throw new ErrorResponse(`limit must be a number`, 400);
    }

    return {
        authorId,
        sort,
        page,
        limit,
    };
}
