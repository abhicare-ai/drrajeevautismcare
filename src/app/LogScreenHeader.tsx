import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import Link from "next/link";

import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}
export default function LogScreenHeader({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        "relative mx-auto flex max-w-7xl items-center justify-center",
        className,
      )}
    >
      <NavigationMenu>
        <NavigationMenuList>
          {/* Home */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* About Autism */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>About Autism</NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col gap-2 p-4 lg:w-[920px]">
              <NavigationMenuLink asChild>
                <Link href="/about-autism/what-is-autism">What is Autism?</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/about-autism/symptoms">Signs & Symptoms</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/about-autism/diagnosis">Early Diagnosis</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/about-autism/faqs">FAQs</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Treatment & Support */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Treatment & Support</NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col gap-2 p-4 lg:w-[920px]">
              <NavigationMenuLink asChild>
                <Link href="/treatment/approach">Our Treatment Approach</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/treatment/consultation">Online Consultation</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/treatment/yoga-therapy">Yoga & Therapies</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/treatment/diet-nutrition">Diet & Nutrition</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/treatment/medicines">Medicines & Supplements</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Get Involved */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Get Involved</NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col gap-2 p-4 lg:w-[920px]">
              <NavigationMenuLink asChild>
                <Link href="/get-involved/sponsor">Sponsor a Child</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Success Stories */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Success Stories</NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col gap-2 p-4 lg:w-[920px]">
              <NavigationMenuLink asChild>
                <Link href="/stories/videos">Video Testimonials</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* About Us */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col gap-2 p-4 lg:w-[920px]">
              <NavigationMenuLink asChild>
                <Link href="/about/mission">Our Mission</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/contact">Contact Us</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
