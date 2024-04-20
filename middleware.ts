import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes : [
        '/',
        '/events/:id',
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing',
        '/favico.svg',
        '/favicon.ico',
    ],
    
    ignoredRoutes : [
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing'
    ]

});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};