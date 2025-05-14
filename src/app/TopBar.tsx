"use client"
import logo from "@/assets/web_logo_2.png";
import { Button } from "@/components/ui/button";
import { Handshake, HelpingHand } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BookAppoinmet from "./BookAppoinmet";
import { useState } from "react";

export default function TopBar() {
  const [show, setShow] = useState(false);
  return (
    <>
    <div className="bg-primary">
      <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-5 px-3 py-1 sm:flex-row sm:justify-between">
        <Image src={logo} width={200} alt="logo" />
        <div className="flex flex-col gap-5 sm:flex-row">
          <Button variant="secondary" onClick={()=>setShow(true)}>
            <Handshake />
            Book Appointment
          </Button>

          <Button variant="outline">
            <HelpingHand />
            <Link href="/get-involved/sponsor"> Sponsor A Child</Link>
          </Button>
        </div>
      </div>
    </div>

    <BookAppoinmet open={show} onclose={()=>setShow(false)}/>
    </>
  );
}
