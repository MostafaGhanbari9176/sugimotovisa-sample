-- seeding author table
insert into author (name, country) 
values 
("shahin", "iran"),
("mostafa", "iran"),
("albert", "us"),
("david", "us"),
("tony", "us");

-- seeding book table
insert into book (title, author_id, price)
values
("book-s-1", (select id from author where name is 'shahin'), 120),
("book-s-2", (select id from author where name is 'shahin'), 100),
("book-s-3", (select id from author where name is 'shahin'), 200),
("book-s-4", (select id from author where name is 'shahin'), 300),
("book-m-1", (select id from author where name is 'mostafa'), 120),
("book-m-2", (select id from author where name is 'mostafa'), 100),
("book-m-3", (select id from author where name is 'mostafa'), 200),
("book-m-4", (select id from author where name is 'mostafa'), 300),
("book-m-5", (select id from author where name is 'mostafa'), 300),
("book-m-6", (select id from author where name is 'mostafa'), 300),
("book-a-1", (select id from author where name is 'albert'), 120),
("book-a-2", (select id from author where name is 'albert'), 100),
("book-a-3", (select id from author where name is 'albert'), 200),
("book-a-4", (select id from author where name is 'albert'), 300),
("book-a-1", (select id from author where name is 'david'), 120),
("book-a-2", (select id from author where name is 'david'), 100),
("book-a-3", (select id from author where name is 'david'), 200),
("book-a-4", (select id from author where name is 'david'), 300),
("book-a-5", (select id from author where name is 'david'), 300),
("book-a-6", (select id from author where name is 'david'), 300),
("book-a-1", (select id from author where name is 'tony'), 120),
("book-a-2", (select id from author where name is 'tony'), 100),
("book-a-3", (select id from author where name is 'tony'), 200),
("book-a-4", (select id from author where name is 'tony'), 300);