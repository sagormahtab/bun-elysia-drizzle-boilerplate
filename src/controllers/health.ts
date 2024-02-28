import { Context } from "elysia";

export const health = ({ set }: Context) => {
  set.status = 200;
  return {
    status: "success",
    message: "health is ok",
  };
};
