
import { Cairo} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import SecondaryHeader from "@/components/header/secondary-header/SecondaryHeader";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "700"],
})

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

export const metadata = {
  title: "Eccommerce",
  description: "Frontend Project for Codar Certificate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cairo.className} ${geistSans.variable} ${geistMono.variable} antialiased min-h-[100vh] w-[100vw] overflow-x-hidden`}
      >
        <Header />
        <Hero />
        <SecondaryHeader/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
