import { t, type Static } from "elysia";

const baseTodo = t.Object({
  title: t.String(),
  description: t.MaybeEmpty(t.String()),
  done: t.MaybeEmpty(t.Boolean()),
});

const updateTodo = t.Intersect([
  t.Object({
    id: t.Number(),
  }),
  baseTodo,
]);

export type typeTodo = Static<typeof baseTodo>;
export type typeUpdateTodo = Static<typeof updateTodo>;
export const addTodoValidation = {
  body: baseTodo,
};
