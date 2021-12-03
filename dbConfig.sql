CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "recommendations" (
	"id" serial NOT NULL DEFAULT 'uuid()',
	"name" varchar(255) NOT NULL,
	"youtube_link" varchar(255) NOT NULL UNIQUE,
	CONSTRAINT "recommendations_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "votes" (
	"id" serial NOT NULL DEFAULT 'uuid()',
	"recommendations_id" varchar(255) NOT NULL,
	"vote_value" numeric NOT NULL,
	CONSTRAINT "votes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "votes" ADD CONSTRAINT "votes_fk0" FOREIGN KEY ("recommendations_id") REFERENCES "recommendations"("id") ON DELETE CASCADE;;

