import { BooksRequestParamsDTO } from "../dto/books-request.dto.ts";
import { BooksResponseDTO } from "../dto/books-response.dto.ts";
import { countBooks, getBook } from "../services/get.book.ts";

export async function getBooksHandler(
  params: BooksRequestParamsDTO,
): Promise<BooksResponseDTO> {
  const page = Number.parseInt(params.page);
  const limit = Number.parseInt(params.limit);

  const books = await getBook(
    params.authorId,
    params.sort,
    page,
    limit,
  );

  const booksCount = await countBooks();

  return {
    books: books,
    page,
    pageLength: limit,
    pagesCount: Math.ceil(booksCount / limit),
  };
}
