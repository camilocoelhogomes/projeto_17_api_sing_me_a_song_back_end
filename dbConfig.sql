DROP DATABASE projeto_17_test;
CREATE DATABASE projeto_17_test;
\c projeto_17_test;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "recommendations" (
	"id" uuid NOT NULL DEFAULT uuid_generate_v4(),
	"name" varchar(255) NOT NULL,
	"youtube_link" varchar(255) NOT NULL UNIQUE,
	CONSTRAINT "recommendations_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "votes" (
	"id" uuid NOT NULL DEFAULT uuid_generate_v4(),
	"recommendations_id" uuid NOT NULL,
	"vote_value" numeric NOT NULL,
	CONSTRAINT "votes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "votes" ADD CONSTRAINT "votes_fk0" FOREIGN KEY ("recommendations_id") REFERENCES "recommendations"("id") ON DELETE CASCADE;;

