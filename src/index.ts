import "dotenv/config";
import { Elysia } from "elysia";
import routes from "./routes";

const app = new Elysia();
app.get("/", () => "Hello");
app.use(routes);

app.listen(process.env.PORT || 4200);
console.log(`🦊 Elysia is running at ${app.server?.url}`);
