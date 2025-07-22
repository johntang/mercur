import { Module } from "@medusajs/framework/utils";

import TopicModuleServie from "./service";

export const TOPIC_MODULE = "topic";
export { TopicModuleServie };

export default Module(TOPIC_MODULE, {
  service: TopicModuleServie,
});
