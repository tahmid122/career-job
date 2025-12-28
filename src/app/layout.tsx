import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Career Job",
  description:
    "Post a job, manage candidates, what's trending on Career job, see what's happening on Career-job to further your job search.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        {children}
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
