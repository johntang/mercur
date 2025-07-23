import { Migration } from "@mikro-orm/migrations";

export class Migration20250723112328 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `alter table if exists "seller" add column if not exists "thread" text null;`
    );
    this.addSql(
      `alter table if exists "seller" add column if not exists "line" text null;`
    );
  }

  override async down(): Promise<void> {
    this.addSql(
      `alter table if exists "seller" drop column if exists "thread";`
    );
    this.addSql(`alter table if exists "seller" drop column if exists "line";`);
  }
}
