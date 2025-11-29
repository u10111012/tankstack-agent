import { env } from "@/env"

type HealthResponse = {
  status: string
  timestamp?: string
  internalApiBase?: string
}

const normalizeBase = (base: string) => base.replace(/\/+$/, "")

const resolveInternalApiBase = () => {
  const explicitBase = env.VITE_INTERNAL_API_BASE
  if (explicitBase) return normalizeBase(explicitBase)

  const fallbackBase = import.meta.env.DEV
    ? "http://127.0.0.1:8787/internal"
    : "/internal"

  return normalizeBase(fallbackBase)
}

export const fetchHealth = async (): Promise<HealthResponse> => {
  const base = resolveInternalApiBase()
  const response = await fetch(`${base}/health`)

  if (!response.ok) {
    throw new Error(`Health check failed with status ${response.status}`)
  }

  return response.json() as Promise<HealthResponse>
}
