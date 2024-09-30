// app/layout.tsx
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";
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
