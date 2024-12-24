import { BooksRequestParamsDTO } from "../dto/books-request.dto.ts";
import {BookDTO, BooksResponseDTO} from "../dto/books-response.dto.ts";
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

  const mappedBooks:BookDTO[] = books.map((book:any) => {
    return {
      authorName : book.author.name,
      title : book.title,
      price : book.price + book.currency,
      publishDate : book.published_at,
    }
  })

  return {
    page: params.page,
    pageLength: params.limit,
    pagesCount: Math.ceil(booksCount / params.limit),
    books: mappedBooks,
  };
}
