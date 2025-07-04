import { Migration } from '@mikro-orm/migrations';

export class Migration20250623110444 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table if exists "seller" add column if not exists "banner" text null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table if exists "seller" drop column if exists "banner";`);
  }

}
