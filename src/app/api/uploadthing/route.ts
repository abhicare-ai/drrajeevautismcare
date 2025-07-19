import { createRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  config: {
    callbackUrl: "https://autismawareness.in/api/uploadthing", // ✅ explicitly set it
  },
  // Apply an (optional) custom config:
  // config: { ... },
});
