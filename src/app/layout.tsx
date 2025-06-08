import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LogScreenHeader from "./LogScreenHeader";
import TopBar from "./TopBar";
import PhoneHeader from "./PhoneHeader";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Dr.Rajeev Autism Care",
    default: "Dr.Rajeev Autism Care",
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
      <body className={`${inter.className} `}>
        <TopBar />
        <div className="w-full hidden lg:block  px-3 py-3 bg-secondary sticky top-0 z-50">
          <LogScreenHeader className="" />
        </div>
        <PhoneHeader className="lg:hidden block sticky top-0 z-50"/>
       

     <div className="space-y-14">
         {children}
        <Footer/>
     </div>
      </body>
    </html>
  );
}
