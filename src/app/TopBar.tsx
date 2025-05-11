import logo from "@/assets/web_logo_2.png";
import { Button } from "@/components/ui/button";
import { Handshake, HelpingHand } from "lucide-react";
import Image from "next/image";

export default function TopBar() {
  return (
    <div className="bg-primary ">
      <div className="max-w-7xl mx-auto flex sm:justify-between items-center relative px-3 py-1 sm:flex-row flex-wrap gap-5 justify-center">
        <Image src={logo} width={200} alt="logo" />
        <div className="flex gap-5 sm:flex-row flex-col">
          <Button variant="secondary">
            <Handshake />
            Book Appointment
          </Button>
          <Button variant="outline">
            <HelpingHand />
            Donate Now
          </Button>
            <Button variant="outline">
            <HelpingHand />
           Sponsor A Child
          </Button>
        </div>
      </div>
    </div>
  );
}
