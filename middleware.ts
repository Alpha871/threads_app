import { clerkMiddleware } from "@clerk/nextjs/server";

// const isPublicRoutes = createRouteMatcher(["/", "api/webhooks/clerk"]);
// const isIgnoredRoutes = createRouteMatcher(["/", "api/webhooks/clerk"]);

// export default clerkMiddleware((auth, request) => {
//   const url = request.nextUrl.pathname;

//   // Log the request URL for debugging
//   console.log(`Request URL: ${url}`);

//   if (!isPublicRoutes(request) || !isIgnoredRoutes(request)) {
//     auth().protect();
//   }
// });

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
