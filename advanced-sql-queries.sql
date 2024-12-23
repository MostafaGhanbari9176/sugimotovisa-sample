-- Find all authors who have published more than 5 books
-- the final query : 
select a.name from author as a inner join book as b on a.id=b.author_id group by a.name having count(*) >5;

-- explanation : 

-- for this we should use GROUP BY for counting and HAVING for the condition
select author_id from book GROUP BY author_id HAVING count(*) > 5;
-- on this query we group the books base on the author_id then filter the result by
-- group count
-- this query work and return the author id's, but we need author name, so we combine this query
-- with a select query on author TABLE : 
select name from author where id in (select author_id from book group by author_id having count(*) > 5);
-- but we can using INNER JOIN and do this match better : 
select a.name from author as a inner join book as b on a.id=b.author_id group by a.name having count(*) >5;
-- on this query we join the tables with author_id foreign key except combining the queries on two table.
-- on this query the SQL engine make a new temporary table base on JOIN clause and then run the query on this table.

-------------------------------------------------------------------------------------------------------------------------




