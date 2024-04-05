import { drizzle } from "drizzle-orm/postgres-js/driver";
import { dbString } from "./constants";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const migrationClient = postgres(dbString, { max: 1 });
await migrate(drizzle(migrationClient), {
  migrationsFolder: "drizzle",
}).catch((err) => {
  console.log("error", err);
});

await migrationClient.end();
