import { Elysia } from "elysia";
import { health } from "./controllers/health";
import { addTodo, getTodo, getTodos } from "./controllers/todoController";
import { addTodoValidation } from "./helpers/validation";

const routes = new Elysia();
routes.get("/health", health);
routes.post("/todo", addTodo, addTodoValidation);
routes.get("/todo", getTodos);
routes.get("/todo/:id", getTodo);
export default routes;
