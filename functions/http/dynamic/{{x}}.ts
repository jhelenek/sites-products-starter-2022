export default function helloWorld(request) {
  const { pathParams, queryParams, site } = request

  return {
    body: "Hello World" + pathParams,
    headers: null,
    statusCode: 200
  }
}
