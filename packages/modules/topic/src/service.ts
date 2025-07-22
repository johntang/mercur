import { MedusaService } from "@medusajs/framework/utils";

import { Topic } from "./models/topic";

export default class TopicModuleServie extends MedusaService({
  Topic,
}) {}
