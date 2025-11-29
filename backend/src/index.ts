import { Hono } from "hono"

import { buildHealthResponse } from "./routes/health"
import internalRoutes from "./routes/internal"
import type { AppEnv } from "./types"

const app = new Hono<AppEnv>()

app.get("/health", (c) => c.json(buildHealthResponse(c.env)))

app.route("/internal", internalRoutes)

export default app
