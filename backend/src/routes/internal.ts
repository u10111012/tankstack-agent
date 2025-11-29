import { Hono } from "hono"
import { getDb } from "../db/client"
import { todos } from "../db/schema"
import { buildHealthResponse } from "./health"
import type { AppEnv } from "../types"

const internal = new Hono<AppEnv>()

internal.get("/health", (c) => c.json(buildHealthResponse(c.env)))

internal.get("/todos", async (c) => {
  const db = getDb(c.env)
  const items = await db.select().from(todos).all()

  return c.json({ data: items })
})

export default internal
