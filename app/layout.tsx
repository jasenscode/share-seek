import "./globals.css";

import { Container } from "@components/Container";
import { Navigation } from "@components/Nav";

export const metadata = {
  title: "Share Seek",
  description: "Market data at your fingertips",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-violet">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
