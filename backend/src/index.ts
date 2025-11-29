import { Hono } from "hono"

import internalRoutes from "./routes/internal"
import type { AppEnv } from "./types"

const app = new Hono<AppEnv>()

app.get("/health", (c) => c.json({ status: "ok" }))

app.route("/internal", internalRoutes)

export default app
