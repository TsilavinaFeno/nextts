import { Geist } from "next/font/google"
import "./globals.css";

const geist = Geist({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={geist.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
