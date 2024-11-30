import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";
import { ThemeProvider } from '@/providers/theme-provider';
import { Header } from "@/components/header"

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
    
    <html
      lang="en"
      suppressHydrationWarning
      >
    <body>
    <ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
			>
    <Header />
    <main className="container mx-auto mt-8 px-4">
    </main>
    <div className="flex flex-col min-h-screen">
      

        {children}
    
    
      <Footer />
    </div>
    </ThemeProvider> 
    </body>
    </html>
	);
}