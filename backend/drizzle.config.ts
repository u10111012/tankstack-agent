/// <reference types="node" />

import { defineConfig } from "drizzle-kit"

const databaseId = process.env.D1_DATABASE_ID ?? ""
const accountId = process.env.CLOUDFLARE_ACCOUNT_ID ?? ""
const apiToken = process.env.CLOUDFLARE_API_TOKEN ?? ""

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    databaseId,
    accountId,
    token: apiToken,
  },
})
