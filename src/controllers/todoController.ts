import { Context } from "elysia";
import { createTodo, getAllTodos, getTodoById, updateTodoById } from "../models/Todo";
import { typeTodo, typeUpdateTodo } from "../helpers/validation";
import responseMapper from "../helpers/responseMapper";
import errorResponseHandler from "../helpers/errorResponseHandler";

export const addTodo = async (ctx: Context) => {
  try {
    await createTodo(ctx.body as typeTodo);
    return responseMapper(null, "Todo created successfully");
  } catch (err) {
    return errorResponseHandler(err);
  }
};

export const getTodos = async (ctx: Context) => {
  try {
    const todos = await getAllTodos();
    return responseMapper(todos, "Todos fetched successfully");
  } catch (err) {
    return errorResponseHandler(err);
  }
};

type ContextWithoutParams = Omit<Context, "params">;
interface TodoParamContext extends ContextWithoutParams {
  params: Record<"id", string>;
}

export const getTodo = async (ctx: TodoParamContext) => {
  try {
    const todoId = +ctx.params.id;
    const todo = await getTodoById(todoId);
    return responseMapper(todo, "Todo fetched successfully");
  } catch (err) {
    return errorResponseHandler(err);
  }
};

export const updateTodo = async (ctx: TodoParamContext) => {
  try {
    const todoId = +ctx.params.id;
    const updatedTodo = await updateTodoById(todoId, ctx.body as typeUpdateTodo);
  } catch (err) {
    return errorResponseHandler(err);
  }
}
