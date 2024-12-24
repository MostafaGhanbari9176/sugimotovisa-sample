import { BooksRequestParamsDTO } from "../dto/books-request.dto.ts";
import { BooksResponseDTO } from "../dto/books-response.dto.ts";
import { countBooks, getBook } from "../services/get-books.service.ts";

export async function getBooksHandler(
  params: BooksRequestParamsDTO,
): Promise<BooksResponseDTO> {

  const books = await getBook(
    params.authorId,
    params.sort,
    params.page,
    params.limit,
  );

  const booksCount = await countBooks();

  return {
    books: books,
    page: params.page,
    pageLength: params.limit,
    pagesCount: Math.ceil(booksCount / params.limit),
  };
}
