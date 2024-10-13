import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/ui/Nav";
import NextTopLoader from 'nextjs-toploader';
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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextTopLoader
          color="red"
          height={4}
          showSpinner={false}
        />
        <Nav />
        <main className="py-16">
          {children}
        </main>
      </body>
    </html>
  );
}
