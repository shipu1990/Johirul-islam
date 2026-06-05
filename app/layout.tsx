import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Johirul Islam",
  description: "Senior Frontend Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Added suppressHydrationWarning here to handle extension attributes like cz-shortcut-listen */}
      <body 
        className={`${inter.variable} ${instrumentSerif.variable} ${inter.className} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="max-w-4xl mx-auto w-full px-6 py-12 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}