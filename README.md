
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
You can also find the Postman collection file in the project as `postman_collection.json`.
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

---

## SQL Queries

### 1. Find all authors who have published more than 5 books

**The final query**: 
```sql
select a.name from author as a inner join book as b on a.author_id=b.author_id group by a.name having count(*) >5;
```

**Explanation**: 
- For this, we use `GROUP BY` to count the books and `HAVING` to filter the results based on the count.
- First, we get author IDs with books count:
  ```sql
  select author_id from book GROUP BY author_id HAVING count(*) > 5;
  ```
- Then, we join it with the `author` table to get the author's name:
  ```sql
  select name from author where author_id in (select author_id from book group by author_id having count(*) > 5);
  ```
- Alternatively, we can use an `INNER JOIN`:
  ```sql
  select a.name from author as a inner join book as b on a.author_id=b.author_id group by a.name having count(*) >5;
  ```

---

### 2. Calculate the average book price for each country, based on the authors' countries

**The final query**: 
```sql
select a.country, avg(b.price) from author as a INNER JOIN book as b on a.author_id=b.author_id group by a.country;
```

**Explanation**:
- We use `JOIN` to combine `author` and `book` tables because we need the `price` from the `book` table and the `country` from the `author` table.
- The SQL engine creates a temporary table based on the `JOIN` clause and then calculates the average price grouped by `country`.

---

### 3. Retrieve a list of books that includes author names, sorted by price in descending order, and filterable by a specific year of publication.

**The final query**: 
```sql
select a.name as author_name, b.title as book_name, concat(b.price,b.currency) as book_price, b.published_at 
from author as a INNER JOIN book as b on a.author_id=b.author_id 
where EXTRACT(year from b.published_at) = '2024'
order by b.price DESC;
```

**Explanation**:
- We `JOIN` the `author` table to the `book` table to get the author's name.
- We use `ORDER BY` to sort the results by book price in descending order.
- `EXTRACT(year from b.published_at)` is used to filter by the year of publication.
- The `concat` function is used to combine `price` and `currency` for a better result.

---

## License

This project is open-source and available under the MIT License.

## Contact

For any questions, feel free to contact me at [mostafaghanbari9176@gmail.com](mostafaghanbari9176@gmail.com).
