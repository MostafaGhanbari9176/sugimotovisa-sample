export class ErrorResponse extends Error {
    constructor(
        message: string,
        readonly status: number = 500,
    ) {
        super(message);
    }
}


