import {
  auth,
  clerkMiddleware,
  createRouteMatcher,
} from "@clerk/nextjs/server";

// const isPublicRoutes = createRouteMatcher(["/", "api/webhooks/clerk"]);
// const isIgnoredRoutes = createRouteMatcher(["/", "api/webhooks/clerk"]);

// export default clerkMiddleware((auth, request) => {
//   if (!isPublicRoutes(request)) {
//     auth().protect();
//   }
// });

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
