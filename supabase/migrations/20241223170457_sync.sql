-- creating author table
-- this create author table if not exists
-- another table have reference to this table so we should create this first
create table if not exists author (
    id uuid primary key default gen_random_uuid() not null,
    name varchar(30) not null,
    country varchar(30) not null
);

-- creating book table
-- this create book table if not exists
create table if not exists book (
    id uuid default gen_random_uuid() primary key not null,
    author_id uuid references author(id) on delete cascade not null,
    title varchar(30) not null,
    price decimal not null,
    currency varchar(20) default '$' not null,
    published_at DATE default now() not null
);


