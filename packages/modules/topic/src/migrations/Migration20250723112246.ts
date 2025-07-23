import { Migration } from "@mikro-orm/migrations";

export class Migration20250723112246 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `alter table if exists "topic" add column if not exists "status" text check ("status" in ('SHOW', 'HIDE')) not null;`
    );

    this.addSql(
      `alter table if exists "topic" add column if not exists "displaySince" timestamptz not null;`
    );

    this.addSql(
      `alter table if exists "topic" add column if not exists "displayUntil" timestamptz not null;`
    );
  }

  override async down(): Promise<void> {
    this.addSql(
      `alter table if exists "seller" drop column if exists "status";`
    );
    this.addSql(
      `alter table if exists "seller" drop column if exists "displaySince";`
    );
    this.addSql(
      `alter table if exists "seller" drop column if exists "displayUntil";`
    );
  }
}
