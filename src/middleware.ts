import {NextRequest, NextResponse} from "next/server";

const publicPaths: string[] = [
    "/login",
    "/signin"
]

const checkIfPublic = (request: NextRequest) =>
    publicPaths.find(pPath => request.nextUrl.pathname.startsWith(pPath))

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('token');

    if(checkIfPublic(request) && currentUser) {
        return NextResponse.redirect(new URL("/auth/home", request.url));
    }

    if(!checkIfPublic(request) && !currentUser){
        return NextResponse.redirect(new URL("/login", request.url));
    }

    NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}