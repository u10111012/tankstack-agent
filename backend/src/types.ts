export type AppBindings = {
  DB: D1Database
  INTERNAL_API_BASE?: string
}

export type AppEnv = {
  Bindings: AppBindings
}
