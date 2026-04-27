export async function onRequest({ request }) {
  const url = new URL(request.url);
  const workerUrl = `https://photo-product-api.937665174.workers.dev${url.pathname}${url.search}`;

  const modifiedRequest = new Request(workerUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body
  });

  return fetch(modifiedRequest);
}
