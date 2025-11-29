import type { AppBindings } from "../types"

type HealthResponse = {
  status: "ok"
  timestamp: string
  internalApiBase?: string
}

export const buildHealthResponse = (bindings: AppBindings): HealthResponse => ({
  status: "ok",
  timestamp: new Date().toISOString(),
  internalApiBase: bindings.INTERNAL_API_BASE,
})
