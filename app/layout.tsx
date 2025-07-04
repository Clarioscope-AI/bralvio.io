import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

// Configure Urbanist font - it's a variable font
const urbanist = Urbanist({
  subsets: ['latin'],  // Required
  display: 'swap',     // Optional but recommended
  variable: '--font-urbanist',  // For CSS variable usage
});

export const metadata: Metadata = {
  title: "Bralvio - Engineering Intelligence Into Life",
  description: "Engineering Intelligence Into Life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${urbanist.variable} antialiased`}>
      <body>
        <div className="container mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}