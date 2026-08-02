import { getAssetFromKV } from "@cloudflare/kv-asset-handler";

addEventListener("fetch", (event) => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    return await getAssetFromKV(event);
  } catch (e) {
    const url = new URL(event.request.url);
    const isSpaRoute =
      event.request.method === "GET" && !url.pathname.includes(".");

    if (isSpaRoute) {
      return await getAssetFromKV(
        new Request(`${url.origin}/index.html`, event.request)
      );
    }

    return new Response("Not found", { status: 404 });
  }
}
