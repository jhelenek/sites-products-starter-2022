export function main(request) {
  const { pathParams, queryParams, site } = request

  return {
    body: "Hello World " + JSON.stringify(pathParams)a,
    headers: null,
    statusCode: 200
  }
}
