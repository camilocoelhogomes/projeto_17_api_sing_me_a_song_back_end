DROP DATABASE projeto_17_test;
CREATE DATABASE projeto_17_test;
\c projeto_17_test;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "recommendations" (
	"id" uuid NOT NULL DEFAULT uuid_generate_v4(),
	"name" varchar(255) NOT NULL,
	"youtube_link" varchar(255) NOT NULL UNIQUE,
  "score" NUMERIC NOT NULL,
	CONSTRAINT "recommendations_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
