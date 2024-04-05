import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as todoSchema from "../schemas/todoSchema";
import { dbString } from "./constants";

// for query purposes
const queryClient = postgres(dbString);
const db = drizzle(queryClient, { schema: { ...todoSchema } });

export default db;
