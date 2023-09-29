export function main(request) {
  const { pathParams, queryParams, site } = request

  return {
    body: "Hello World" + pathParams,
    headers: null,
    statusCode: 200
  }
}
