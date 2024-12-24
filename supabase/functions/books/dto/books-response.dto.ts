export interface BookDTO {
    authorName: string;
    authorId: string;
    title: string;
    price: string;
    publishDate: string;
}

export interface BooksResponseDTO {
    page: number;
    pageLength: number;
    pagesCount: number;
    books: BookDTO[];
}


