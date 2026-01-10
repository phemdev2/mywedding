import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  weight: ["400", "700"]
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  variable: "--font-cormorant",
  style: "italic",
  weight: ["400", "600"]
});

export const metadata: Metadata = {
  title: "Victoria & Opeoluwa - Our Wedding Day",
  description: "Official wedding program for Victoria Isioma & Opeoluwa Habeeb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${cormorant.variable} bg-wedding-cream text-gray-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}