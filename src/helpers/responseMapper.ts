export default function responseMapper(
  data?: object | null,
  message?: string | null,
  status?: string | null
) {
  return {
    status: status || "success",
    data: data || undefined,
    message: message || undefined,
  };
}
