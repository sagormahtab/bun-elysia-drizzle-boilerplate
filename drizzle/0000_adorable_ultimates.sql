CREATE TABLE IF NOT EXISTS "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(64),
	"description" varchar(256),
	"done" boolean
);
