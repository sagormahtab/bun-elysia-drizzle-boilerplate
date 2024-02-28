import { Elysia } from "elysia";
import { health } from "./controllers/health";

const routes = new Elysia().get("/health", health);
export default routes;
