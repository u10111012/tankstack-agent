import { drizzle } from "drizzle-orm/d1"

import type { AppBindings } from "../types"
import * as schema from "./schema"

export const getDb = (bindings: AppBindings) => drizzle(bindings.DB, { schema })
