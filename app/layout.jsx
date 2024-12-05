import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

/* const newEditorial = localFont({
  src: [
     {
       path: "./fonts/EditorialNew-Regular.otf",
       weight: "400",
       style: "normal",
     },
     {
       path: "./fonts/EditorialNew-Italic.otf",
       weight: "400",
       style: "italic",
     },
    {
      path: "./fonts/EditorialNew-Ultralight.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/EditorialNew-UltralightItalic.otf",
      weight: "400",
      style: "italic",
    },
  ]
}) */

export const metadata = {
  title: "Dean\'slist Network State",
  description: "A Network State Of Web3 Powerusers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#160A26] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
