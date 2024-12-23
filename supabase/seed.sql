-- seeding author table
insert into author (name, country) 
values 
('shahin', 'iran'),
('mostafa', 'iran'),
('albert', 'us'),
('david', 'us'),
('tony', 'us');
-- seeding book table
insert into book (title, author_id, price)
values
('book-s-1', (select author_id from author where name='shahin' limit 1), 120),
('book-s-2', (select author_id from author where name='shahin' limit 1), 100),
('book-s-3', (select author_id from author where name='shahin' limit 1), 200),
('book-s-4', (select author_id from author where name='shahin' limit 1), 300),
('book-m-1', (select author_id from author where name='mostafa' limit 1), 120),
('book-m-2', (select author_id from author where name='mostafa' limit 1), 100),
('book-m-3', (select author_id from author where name='mostafa' limit 1), 200),
('book-m-4', (select author_id from author where name='mostafa' limit 1), 300),
('book-m-5', (select author_id from author where name='mostafa' limit 1), 300),
('book-m-6', (select author_id from author where name='mostafa' limit 1), 300),
('book-a-1', (select author_id from author where name='albert' limit 1), 120),
('book-a-2', (select author_id from author where name='albert' limit 1), 100),
('book-a-3', (select author_id from author where name='albert' limit 1), 200),
('book-a-4', (select author_id from author where name='albert' limit 1), 300),
('book-a-1', (select author_id from author where name='david' limit 1), 120),
('book-a-2', (select author_id from author where name='david' limit 1), 100),
('book-a-3', (select author_id from author where name='david' limit 1), 200),
('book-a-4', (select author_id from author where name='david' limit 1), 300),
('book-a-5', (select author_id from author where name='david' limit 1), 300),
('book-a-6', (select author_id from author where name='david' limit 1), 300),
('book-a-1', (select author_id from author where name='tony' limit 1), 120),
('book-a-2', (select author_id from author where name='tony' limit 1), 100),
('book-a-3', (select author_id from author where name='tony' limit 1), 200),
('book-a-4', (select author_id from author where name='tony' limit 1), 300);