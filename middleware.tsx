import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {

    const url = request.nextUrl.clone()

    let isLogin = request.cookies.get("logged")

    if (!isLogin){
        if (request.nextUrl.pathname.startsWith('/room')) {
            return NextResponse.rewrite(new URL('/loginz', request.url))
        }
    } 
    // else {
    //     return NextResponse.rewrite(new URL('/loginz', request.url))
    // }

//   if (request.nextUrl.pathname.startsWith('/loginz')) {
//     return NextResponse.rewrite(new URL('/about-2', request.url))
//   }
 
  
}














// import { NextResponse } from "next/server";

// export default function middleware(req: { cookies: { get: (arg0: string) => any; }; url: any; }) {
//     let verify = req.cookies.get("loggedin")
//     let url = req.url

//     if (!verify && url.includes('/room')) {
//         return NextResponse.redirect("http://localhost:3000/loginz")
//     }

   
// }