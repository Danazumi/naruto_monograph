"use client"
import type { AppProps } from "next/app"
import {UserProvider} from "@/src/user"
import { Inter as FontSans } from "@next/font/google"
import { ThemeProvider } from "next-themes"
import { AuthProvider } from "@/utils/AuthContext"
import PrivateRoutes from "./privateRoutes"
import "@/styles/globals.css"

 

// import {store} from "@/src/app/store"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
})


export default function App({ Component, pageProps }: AppProps) {
  // const [supabase] = useState(() => createBrowserSupabaseClient())
  
//   const client = new ApolloClient({
//   uri: "https://narutoql.up.railway.app/graphql",
//   cache: new InMemoryCache(),
// })


  return (
        <div>
            <style jsx global>{`
              :root {
                --font-sans: ${fontSans.style.fontFamily};
              }
            }`}</style>
            <UserProvider>
              <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                        
                              <Component {...pageProps} />
                               
                </ThemeProvider>
            </UserProvider>

        </div>
        
      
    
  )
}





//       <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//                 <ApolloProvider client={client}>
//                   <SignedIn>
//                       <Component {...pageProps} />
//                   </SignedIn>
//                 <SignedOut>
//                   <SignIn/>
//                 </SignedOut>
//                 </ApolloProvider>
//         </ThemeProvider>
//       </ClerkProvider>
//     </QueryClientProvider>
//   )
// }
