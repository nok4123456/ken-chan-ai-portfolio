// app/layout.tsx
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ken Chan Portfolio",
  description:
    "Welcome to Ken Chan's professional portfolio showcasing skills, projects, and experiences.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
