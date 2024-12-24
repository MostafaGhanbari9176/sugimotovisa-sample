import { BooksRequestParamsDTO, SortType } from "../dto/books-request.dto.ts";
import { ErrorResponse } from "../dto/error-response.dto.ts";
import * as uuid from "https://esm.sh/uuid";

export function validateGetBooks(req: Request): BooksRequestParamsDTO {
  const url = new URL(req.url);

  const authorId: string | null = url.searchParams.get("authorId");
  const sort: string = url.searchParams.get("sort") || SortType.DESC;
  const page: number = Number.parseInt(url.searchParams.get("page") || "1");
  const limit: number = Number.parseInt(url.searchParams.get("limit") || "5");

  if (authorId != null) {
    if (!uuid.validate(authorId)) {
      throw new ErrorResponse(`authorId is not a valid UUID`, 400);
    }
  }

  if (sort != null) {
    if (sort != SortType.DESC && sort != SortType.ASC) {
      throw new ErrorResponse(`sort must be one of ${SortType}`, 400);
    }
  }

  if (!Number.isSafeInteger(page)) {
    throw new ErrorResponse(`page must be a number`, 400);
  }

  if (!Number.isSafeInteger(limit)) {
    throw new ErrorResponse(`limit must be a number`, 400);
  }

  return {
    authorId,
    sort,
    page,
    limit,
  };
}
