"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ChevronDown, AlignRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

interface PhoneMenuProps {
  className: string;
}

const sections = [
  {
    title: "About Autism",
    links: [
      { href: "/about-autism/what-is-autism", label: "What is Autism?" },
      { href: "/about-autism/symptoms", label: "Signs & Symptoms" },
      { href: "/about-autism/diagnosis", label: "Early Diagnosis" },
      { href: "/about-autism/faqs", label: "FAQs" },
    ],
  },
  {
    title: "Treatment & Support",
    links: [
      { href: "/treatment/approach", label: "Our Treatment Approach" },
      { href: "/treatment/consultation", label: "Online Consultation" },
      { href: "/treatment/yoga-therapy", label: "Yoga & Therapies" },
      { href: "/treatment/diet-nutrition", label: "Diet & Nutrition" },
      { href: "/treatment/medicines", label: "Medicines & Supplements" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { href: "/get-involved/sponsor", label: "Sponsor a Child" },
    ],
  },
  {
    title: "Success Stories",
    links: [{ href: "/stories/videos", label: "Video Testimonials" }],
  },

  {
    title: "About Us",
    links: [
      { href: "/about/mission", label: "Our Mission" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
];

export default function PhoneMenu({ className }: PhoneMenuProps) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setActiveSection((prev) => (prev === title ? null : title));
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        asChild
        className={cn(
          `bg-secondary flex w-full justify-start rounded-none px-3`,
          className,
        )}
      >
        <Button variant="ghost" size="icon">
          <AlignRight className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[300px]">
        <DialogTitle className="sr-only">Mobile Navigation Menu</DialogTitle>
        <div className="mt-10 flex flex-col">
          {/* Home */}
          <Link href="/" onClick={() => setOpen(false)}>
            <Button
              variant="outline"
              className="w-full justify-start rounded-none"
            >
              Home
            </Button>
          </Link>

          {/* Other Sections */}
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col">
              <Button
                onClick={() => toggleSection(section.title)}
                variant="outline"
                className="w-full justify-between rounded-none"
              >
                {section.title}
                <ChevronDown
                  size={16}
                  className={`ml-2 transition-transform ${
                    activeSection === section.title ? "rotate-180" : ""
                  }`}
                />
              </Button>

              {activeSection === section.title && (
                <div className="flex flex-col gap-1">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                    >
                      <Button
                        variant="default"
                        className="w-full justify-start rounded-none text-sm"
                      >
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
