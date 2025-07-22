import { model } from "@medusajs/framework/utils";

export const Topic = model.define("topic", {
  id: model.id({ prefix: "topic" }).primaryKey(),
  name: model.text(),
  image: model.text().default(""),
  status: model.enum(["SHOW", "HIDE"]),
  displaySince: model.dateTime(),
  // displayUntil: model.dateTime(),
});
