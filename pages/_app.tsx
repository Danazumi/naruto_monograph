import type { AppProps } from "next/app"
import { Inter as FontSans } from "@next/font/google"
import { ThemeProvider } from "next-themes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/styles/globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client  = {queryClient}>
      <style jsx global>{`
				:root {
					--font-sans: ${fontSans.style.fontFamily};
				}
			}`}</style>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
