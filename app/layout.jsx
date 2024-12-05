import { Inter } from 'next/font/google';
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const newEditorial = localFont({
  src: [
    {
       path: "./fonts/EditorialNew-Italic.otf",
       weight: "400",
       style: "italic",
     },
    {
      path: "./fonts/EditorialNew-UltralightItalic.otf",
      weight: "300",
      style: "italic",
    },
  ],
  variable: '--font-editorial-new',
})

export const metadata = {
  title: "Dean\'slist Network State",
  description: "A Network State Of Web3 Power users",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${inter.className} ${newEditorial.variable} antialiased bg-[#160A26] text-white font-inter`}
      >
        {children}
      </body>
    </html>
  );
}