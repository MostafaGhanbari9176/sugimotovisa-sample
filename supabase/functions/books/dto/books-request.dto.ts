export enum SortType {
    DESC = "DESC",
    ASC = "ASC",
}

export interface BooksRequestParamsDTO {
    authorId: string|null;
    sort: SortType|null;
    page: string;
    limit: string;
}

