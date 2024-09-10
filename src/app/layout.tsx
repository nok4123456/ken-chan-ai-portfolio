// app/layout.tsx
import Navbar from "./components/Navbar";
import "./globals.css"; // Adjust the path as needed
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
      </body>
    </html>
  );
}
