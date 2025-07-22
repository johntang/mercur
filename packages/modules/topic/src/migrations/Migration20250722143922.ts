import { Migration } from '@mikro-orm/migrations';

export class Migration20250722143922 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "topic" ("id" text not null, "name" text not null, "image" text not null default '', "status" text check ("status" in ('SHOW', 'HIDE')) not null, "displaySince" timestamptz not null, "displayUntil" timestamptz not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "topic_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_topic_deleted_at" ON "topic" (deleted_at) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "topic" cascade;`);
  }

}
