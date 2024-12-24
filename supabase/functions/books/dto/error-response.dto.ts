export class ErrorResponse extends Error {
    constructor(
        message: string,
        private readonly status: number = 500,
    ) {
        super(message);
    }
}


