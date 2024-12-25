
# Sample-Task

This is a sample task for **Sugimotovisa** using Supabase.

## Structure

I decided to use a modular structure for this project. Below is the project structure:

```
└── supabase
    ├── config.toml
    ├── functions
    │   └── books
    │       ├── dto
    │       │   ├── books-request.dto.ts
    │       │   ├── books-response.dto.ts
    │       │   └── error-response.dto.ts
    │       ├── handlers
    │       │   └── get-books.handler.ts
    │       ├── services
    │       │   └── get-books.service.ts
    │       └── utils
    │           ├── authentication.ts
    │           ├── exception-handler.ts
    │           └── validation.ts
    │       ├── index.ts
    ├── migrations
    │   └── 20241223170457_sync.sql
    └── seed.sql
```

## Testing

I have created a public [Postman collection](https://www.postman.com/blue-capsule-887187/workspace/sugimotovisa/collection/3060890-4096c6d2-c0b6-4c6c-ada5-d65ddcf9e071?action=share&creator=3060890) for you to test the functionality of the API. You can use this to make requests to the endpoints and see the responses.

## Installation

1. Clone the repository to your local machine.
   ```bash
   git clone <repository-url>
   ```

2. Install the necessary dependencies (Supabase and other project dependencies).
- docker
- supabase cli

4. start the project:
   ```bash
   systemctl start docker
   supabase start
   ```

Visit the [Postman collection](https://www.postman.com/blue-capsule-887187/workspace/sugimotovisa/collection/3060890-4096c6d2-c0b6-4c6c-ada5-d65ddcf9e071?action=share&creator=3060890) to test the available API endpoints.

## License

This project is open-source and available under the MIT License.

## Contact

For any questions, feel free to contact me at [mostafaghanbari9176@gmail.com](mostafaghanbari9176@gmail.com).
