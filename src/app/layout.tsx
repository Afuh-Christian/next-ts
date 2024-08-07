import type { Metadata } from "next";
import "./globals.css";
import App from "@/App";


export const metadata: Metadata = {
  title: "Next App",
  description: "Template .. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark">
        <App>
        {children} 
        </App>
        </body>
    </html>
  );
}
