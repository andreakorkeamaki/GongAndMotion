import { Nunito, Quicksand } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: "--font-nunito",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true}>
      <body className={`${nunito.variable} ${quicksand.variable} font-sans`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
