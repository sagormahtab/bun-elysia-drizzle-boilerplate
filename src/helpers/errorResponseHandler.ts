import responseMapper from "./responseMapper";

export default function errorHandler(err: object | unknown) {
  console.log("ERROR ::", err);
  return responseMapper(err || {}, null, "fail");
}
