import { Migration } from '@mikro-orm/migrations';

export class Migration20250623061727 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table if exists "seller" add column if not exists "ig" text null, add column if not exists "facebook" text null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table if exists "seller" drop column if exists "ig", drop column if exists "facebook";`);
  }

}
