import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Dr.Rajeev Autism Care",
    default: "Dr. Rajeev Lifecare Trust",
  },
  description:
    "Special care and support for children with autism by Dr. Rajeev. We offer early intervention, personalized therapy, and continuous guidance for parents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>{children}</body>
    </html>
  );
}
