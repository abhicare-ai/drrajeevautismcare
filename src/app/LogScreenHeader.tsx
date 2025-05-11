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
        "max-w-7xl mx-auto flex justify-center  items-center relative",
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
            <NavigationMenuContent className="lg:w-[920px] flex flex-col p-4 gap-2">
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
            <NavigationMenuContent className="lg:w-[920px] flex flex-col p-4 gap-2">
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
            <NavigationMenuContent className="lg:w-[920px] flex flex-col p-4 gap-2">
              <NavigationMenuLink asChild>
                <Link href="/get-involved/sponsor">Sponsor a Child</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/get-involved/donate">Donate Now</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/get-involved/volunteer">Volunteer With Us</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/get-involved/partners">Partner With Us</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Success Stories */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Success Stories</NavigationMenuTrigger>
            <NavigationMenuContent className="lg:w-[920px] flex flex-col p-4 gap-2">
              <NavigationMenuLink asChild>
                <Link href="/stories/videos">Video Testimonials</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/stories/reviews">Written Reviews</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/stories/ratings">Star Ratings & Filters</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Resources */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent className="lg:w-[920px] flex flex-col p-4 gap-2">
              <NavigationMenuLink asChild>
                <Link href="/resources/blog">Awareness Blog</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/resources/downloads">Downloadable PDFs</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/resources/videos">Video Library</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/resources/podcast">Podcast & Interviews</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* About Us */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
            <NavigationMenuContent className="lg:w-[920px] flex flex-col p-4 gap-2">
              <NavigationMenuLink asChild>
                <Link href="/about/team">Meet Our Team</Link>
              </NavigationMenuLink>
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
