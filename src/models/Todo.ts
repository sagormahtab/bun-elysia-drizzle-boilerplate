import db from "../config/db";
import { todoSchema } from "../schemas/todoSchema";

type NewTodo = typeof todoSchema.$inferInsert;
type updateTodo = typeof todoSchema.$inferSelect;

export const createTodo = async (todo: NewTodo) => {
  return db.insert(todoSchema).values(todo);
};

export const getAllTodos = async () => {
  return db.query.todoSchema.findMany();
};

export const getTodoById = async (todoId: number) => {
  return db.query.todoSchema.findFirst({
    where: (todo, { eq }) => eq(todo.id, todoId),
  });
};

export const updateTodoById = async (todoId: number, todo: updateTodo) => {
  const foundTodo = await getTodoById(todoId);
  if (!foundTodo) {
    throw new Error(`No todo is found with the id: ${todoId}`);
  }
  return db.update(todoSchema).set(todo);
};
