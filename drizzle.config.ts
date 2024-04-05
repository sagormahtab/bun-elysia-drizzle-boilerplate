import "dotenv/config";
import type { Config } from "drizzle-kit";

const connectionString = process.env.DB_STRING || "";

export default {
  schema: "./src/schemas/*",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString,
  },
} satisfies Config;
