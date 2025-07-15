use flor_loto;

create table contact_author (
	id_contact_author int identity (1,1) not null,
	phone varchar (15) not null,
	email varchar (100) ,
	social_networks varchar (55) null ,
	constraint pk_contact_author primary key (id_contact_author),
	constraint uq_email unique (email),
	constraint uq_phone unique (phone), 

	constraint ck_contact_phone_format 
	check (phone like '[0-9+() -]%'),

	constraint ck_contact_email_format 
	check (email is null or
	email like '%@%.@')
);

create table nationality_author (
	id_nationality int identity (1,1) not null,
	nationality_name nvarchar (55) not null,
	constraint pk_nationality_author primary key (id_nationality) 
);

create table authors (
	id_author int identity(1,1) not null,
	author_name varchar (55) not null ,
	author_last_name varchar (55) not null ,
	contact int,
	nationality int ,
	constraint pk_author primary key (id_author),

	constraint fk_contact foreign key (contact)
	references contact_author (id_contact_author),

	constraint fk_nationality foreign key (nationality)
	references nationality_author (id_nationality)
);

create table blog_articles (
	id_article_blog int identity (1,1)not null,
	article_name nvarchar (55) not null,
	multimedia varbinary not null,
	file_extension nvarchar (200) null,
	constraint pk_article primary key (id_article_blog)
);

create table company_contact (
	id_company_contact int identity (1,1) not null ,
	phone varchar (15) not null ,
	email varchar (55) not null ,
	wed_pages nvarchar (3000) null ,
	constraint pk_company_contact primary key (id_company_contact),

	constraint uq_phone_campany unique (phone),
	constraint uq_email_campany unique (email),

	constraint ck_phone check (phone like
	'[0-9+() -]%'),

	constraint ck_email check (email like
	'%@%.%')
);

create table company_location (
	id_location int identity (1,1) not null ,
	city nvarchar (55) not null ,
	neighborhood nvarchar (55) not null ,
	street nvarchar (55) not null ,
	constraint pk_company_location primary key (id_location) 
);

create table company (
	nit int not null ,
	company_name varchar (55) not null,
	contact int ,
	neighborhood int ,
	constraint pk_nit primary key (nit),

	constraint fk_contact_campany foreign key (contact)
	references company_contact (id_company_contact),

	constraint fk_neighborhood foreign key (neighborhood)
	references company_location (id_location)
);

create table blog (
	id_blog int identity (1,1) not null,
	blog_date date not null ,
	article_name int ,
	company_name int,
	author_name int ,
	constraint pk_blog primary key (id_blog),

	constraint fk_article foreign key (article_name)
	references blog_articles (id_article_blog),

	constraint fk_company foreign key (company_name)
	references company (nit),

	constraint fk_author foreign key (author_name)
	references authors (id_author)
);




