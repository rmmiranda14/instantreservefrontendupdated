import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";
import { Header } from "@/components/header"
import { RootProviders } from '@/providers/RootProviders';
import { Toaster } from 'react-hot-toast'
import InitializeToken from  '@/components/initializetoken'


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
	title: "InstantReserve",
	description: "A general reservation website",
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
    
      <Toaster />
      <RootProviders>

         <Header />
        <main className="container mx-auto mt-1 px-4">
        </main>
          <div className="flex flex-col min-h-screen">
            {children}
             <Footer />
          </div>  
    </RootProviders>
     
    </body>
    </html>
	);
}