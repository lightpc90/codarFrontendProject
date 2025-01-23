
import { Cairo} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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
        className={`${cairo.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
