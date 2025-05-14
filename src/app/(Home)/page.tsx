import React from "react";
import BannerSlider from "./BannerSlider";
import "../styles.css";
import {
  Apple,
  Brain,
  ChartPie,
  HandHeart,
  Heart,
  Star,
  TreePine,
  Users,
} from "lucide-react";
import Image from "next/image";
import drrajeevkumar from "@/assets/rajevdocor.jpg";

import partenrship from "@/assets/partnership.jpg";
import factoautism from "@/assets/autism-factor.png";
import getConnectimg from "@/assets/getconnect.png";
import faqImge from "@/assets/connect-to-knowledge-img.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import TesomonialSlider from "./TesomonialSlider";
import VavBorder from "@/components/VavBorder";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <BannerSlider />
      <div className="w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-[200px] w-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,
             172-41.86,82.39-16.72,168.19-17.73,
             250.45-.39C823.78,31,906.67,72,
             985.66,92.83c70.05,18.48,146.53,
             26.09,214.34,3V0H0V27.35A600.21,
             600.21,0,0,0,321.39,56.44Z"
            fill="#2B7FFF"
          />
        </svg>
        <div className="space-y-14">
          <div className="mx-auto max-w-7xl px-3">
            <div className="flex flex-col gap-5 lg:flex-row">
              <div className="space-y-5 lg:w-1/2">
                <p className="text-4xl font-extrabold">
                  Introduction To Aut<span className="text-primary">is</span>m
                </p>
                <div className="space-y-3">
                  <p>
                    <span className="font-bold"> Autism</span> is a condition
                    that affects how people see the world and connect with
                    others. It is not an illness, but a different way of
                    thinking and feeling. Some people with autism may find it
                    hard to talk, play, or understand others, while some may
                    just prefer being alone or have special interests.
                  </p>
                  <p>
                    Autism bachpan mein prakat hota hai, lekin iska prabhav
                    jeevan bhar reh sakta hai. Kuch logon mein yeh symptoms
                    halki roop mein hote hain, jabki kuch mein zyada prabhav
                    hota hai. ASD ka mukhya lakshan samajik sampark mein
                    kathinai, vyavhaarik antar, aur kuch vishesh ruchiyon mein
                    atyadhik ruchi lena ho sakta hai.
                  </p>
                  <p>
                    Autism is a condition that affects how a person thinks,
                    communicates, and interacts with others. Every child with
                    autism is different. Some may find it hard to speak or
                    understand language, while others may be very sensitive to
                    lights, sounds, or touch. With the right support and early
                    care, children with autism can learn, grow, and live happy
                    lives.
                  </p>
                </div>
              </div>
              <div className="space-y-5 lg:w-1/2">
                <p className="text-4xl font-extrabold">
                  Our Aut<span className="text-primary">is</span>m Services
                </p>
                <div className="grid gap-3 lg:grid-cols-2">
                  <div className="bg-primary space-y-3 rounded-md border p-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-secondary rounded-full p-3">
                        <Brain className="size-8" />
                      </div>
                      <p className="text-card text-2xl font-bold">
                        Why Early Diagnosis Matters
                      </p>
                    </div>
                    <p className="text-card">
                      Getting help early can make a big difference. We use safe
                      and gentle therapies, including homeopathy.
                    </p>
                  </div>
                  <div className="space-y-3 rounded-md border bg-red-300 p-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-secondary rounded-full p-3">
                        <Heart className="size-8" />
                      </div>
                      <p className="text-2xl font-bold">
                        Our Treatment Approach
                      </p>
                    </div>
                    <p className="">
                      We follow natural methods like homeopathy, diet changes,
                      and supportive therapies to help your child improve.
                    </p>
                  </div>

                  <div className="space-y-3 rounded-md border bg-orange-400 p-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-secondary rounded-full p-3">
                        <Apple className="size-8" />
                      </div>
                      <p className="text-2xl font-bold">
                        Personalized Care Plans
                      </p>
                    </div>
                    <p className="">
                      Every child is unique. We create customized care plans to
                      match your child’s specific needs and strengths.
                    </p>
                  </div>

                  <div className="space-y-3 rounded-md border bg-green-500 p-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-secondary rounded-full border p-3">
                        <TreePine className="size-8" />
                      </div>
                      <p className="text-card text-2xl font-bold">
                        Support for Families
                      </p>
                    </div>
                    <p className="text-card">
                      We guide and support parents at every step, helping them
                      understand and support their child better.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <VavBorder />
            <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3 md:flex-row">
              <div className="space-y-5 md:w-1/2">
                <p className="text-4xl font-extrabold">
                  Step To Get He<span className="text-primary">lp</span>
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="bg-primary space-y-3 rounded-md border p-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-secondary rounded-full p-3">
                        <ChartPie className="size-8" />
                      </div>
                      <p className="text-card text-2xl font-bold">Diagnosis</p>
                    </div>
                    <p className="text-card">Early diagnesis evaluation</p>
                  </div>
                  <div className="bg-primary space-y-3 rounded-md border p-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-secondary rounded-full p-3">
                        <HandHeart className="size-8" />
                      </div>
                      <p className="text-card text-2xl font-bold">Treatment</p>
                    </div>
                    <p className="text-card">
                      Personalised plans for all children Support Supporting
                      families & resources
                    </p>
                  </div>

                  <div className="bg-primary space-y-3 rounded-md border p-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-secondary rounded-full p-3">
                        <Users className="size-8" />
                      </div>
                      <p className="text-card text-2xl font-bold">Support</p>
                    </div>
                    <p className="text-card">Supporting families & resources</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-y-5 rounded-md bg-blue-300 p-3 md:w-1/2">
                <Carousel className="w-full cursor-grab">
                  <CarouselContent>
                    <CarouselItem className="bg-card !w-full space-y-5 rounded-md p-3">
                      <div className="flex gap-3">
                        <Star fill="#2B7FFF" />
                        <Star fill="#2B7FFF" />
                        <Star fill="#2B7FFF" />
                        <Star fill="#2B7FFF" />
                        <Star fill="#2B7FFF" />
                      </div>
                      <p>
                        “When we first visited the center, we were filled with
                        doubts and fear about our child’s future. But within a
                        few sessions, we saw noticeable improvement in his
                        communication. The therapists were kind, consistent, and
                        incredibly knowledgeable. They not only helped my child
                        but educated us as parents on how to support him better.
                        Every interaction felt genuine and hopeful. We feel
                        blessed to have found such a compassionate team.”
                      </p>
                      <p className="font-bold">Anita Mishra</p>
                    </CarouselItem>
                    <CarouselItem className="bg-card !w-full space-y-5 rounded-md p-3">
                      <div className="flex gap-3">
                        <Star fill="#FF9800" />
                        <Star fill="#FF9800" />
                        <Star fill="#FF9800" />
                        <Star fill="#FF9800" />
                        <Star fill="#FF9800" />
                      </div>
                      <p>
                        “My son used to avoid eye contact and had frequent
                        meltdowns. After joining Dr. Rajeev’s therapy program,
                        we saw steady changes in his social behavior. What stood
                        out the most was the team’s patience and individual
                        attention. They understood every child is unique and
                        treated him like their own. I cannot thank them enough
                        for the confidence they gave us. Truly a five-star
                        service from the heart.”
                      </p>
                      <p className="font-bold">Karan Patel</p>
                    </CarouselItem>
                    <CarouselItem className="bg-card !w-full space-y-5 rounded-md p-3">
                      <div className="flex gap-3">
                        <Star fill="#4CAF50" />
                        <Star fill="#4CAF50" />
                        <Star fill="#4CAF50" />
                        <Star fill="#4CAF50" />
                        <Star fill="#4CAF50" />
                      </div>
                      <p>
                        “We had tried several places before, but nothing seemed
                        to work. Then a friend recommended this center, and we
                        decided to give it one last try. In just a few months,
                        my daughter started expressing her needs and even
                        smiling more. The environment is so warm and respectful.
                        Every session is focused, structured, and tailored to
                        her needs. We finally feel like we’re on the right
                        path.”
                      </p>
                      <p className="font-bold">Sonal Rajput</p>
                    </CarouselItem>
                    <CarouselItem className="bg-card !w-full space-y-5 rounded-md p-3">
                      <div className="flex gap-3">
                        <Star fill="#E91E63" />
                        <Star fill="#E91E63" />
                        <Star fill="#E91E63" />
                        <Star fill="#E91E63" />
                        <Star fill="#E91E63" />
                      </div>
                      <p>
                        “As a parent, it’s heartbreaking to feel helpless. But
                        the team here gave us hope when we had none. They took
                        the time to understand my son’s needs and built a plan
                        just for him. He is now more independent, speaks short
                        sentences, and enjoys interacting with others. No one
                        else believed in him like they did. This place changed
                        our lives for the better.”
                      </p>
                      <p className="font-bold">Rahul Dev</p>
                    </CarouselItem>
                    <CarouselItem className="bg-card !w-full space-y-5 rounded-md p-3">
                      <div className="flex gap-3">
                        <Star fill="#009688" />
                        <Star fill="#009688" />
                        <Star fill="#009688" />
                        <Star fill="#009688" />
                        <Star fill="#009688" />
                      </div>
                      <p>
                        “Finding support for autism in smaller towns is tough,
                        but this center exceeded every expectation. From their
                        professional conduct to the customized therapy plans,
                        everything was top-notch. My child has started making
                        eye contact and responds to his name now. The changes we
                        saw were slow but steady and gave us immense hope. Every
                        team member treats children with dignity and care.
                        Highly recommended for any parent feeling lost.”
                      </p>
                      <p className="font-bold">Jyoti Sharma</p>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>

          <div>
            <VavBorder />
            <div className="space-y-5">
              <p className="text-center text-4xl font-extrabold">
                Meet Dr. Rajeev & <span className="text-primary">Team</span>
              </p>
              <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3 md:flex-row">
                <Image
                  src={drrajeevkumar}
                  alt="drrajeevkumar"
                  className="h-[700px] rounded-md object-cover md:w-1/2"
                />
                <div className="flex gap-3 md:w-1/2">
                  <div className="h-fit space-y-3 overflow-hidden rounded-md border">
                    <div className="p-3">
                      <p className="text-center text-2xl font-bold">
                        Ongoing Compa<span className="text-primary">ig</span>ns
                      </p>
                    </div>

                    <Image
                      src={partenrship}
                      alt="childSponser"
                      className="object-cover duration-300 hover:scale-105"
                    />
                    <div className="p-3">
                      <p>Become a Partner&lsquo;s</p>
                    </div>
                    <div className="p-3">
                      <Button className="w-full">  <Link href="/get-involved/sponsor">Sponsor a Child</Link></Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <VavBorder />
            <div className="mx-auto max-w-7xl px-3">
              <div className="relative">
                {/* Wave SVG divider */}
                <div className="w-full rotate-180 overflow-hidden leading-[0]">
                  <div className="custom-shape-divider-top-1746940280">
                    <svg
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1200 120"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"
                        fill="#FDEBE3"
                      ></path>
                    </svg>
                  </div>
                </div>

                {/* Background and content */}
                <div className="relative z-10 space-y-5 bg-[#FDEBE3] text-slate-800">
                  <p className="text-center text-4xl font-extrabold">
                    Causes & <span className="text-primary">Factors</span>
                  </p>

                  <div className="space-y-14">
                    <div className="flex flex-col gap-5 md:flex-row">
                      <div className="space-y-3 md:w-1/2">
                        <p className="leading-[30px]">
                          There is no known single cause for Autism, but it is
                          generally accepted that it is caused by differences in
                          brain structure or function. Brain scans show
                          differences in the shape and structure of the brain in
                          people with Autism compared to in neurotypical
                          development. Researchers do not know the exact cause
                          of Autism but are investigating a number of theories,
                          including the links among heredity, genetics, and
                          medical problems. There has been misinformation about
                          the cause of Autism. It is not caused by vaccines or
                          due to parenting style or nutrition.
                        </p>
                        <p className="leading-[30px]">
                          In many families, there appears to be a pattern of
                          Autism or related disabilities, further supporting the
                          theory that the disorder has a genetic basis.
                        </p>
                      </div>
                      <div className="space-y-3 md:w-1/2">
                        <p className="leading-[30px]">
                          While no one gene has been identified as causing
                          Autism, researchers are searching for irregular
                          segments of genetic code that people with Autism may
                          have inherited. It also appears that some people are
                          born with a susceptibility to Autism, but researchers
                          have not yet identified a single “trigger” that causes
                          Autism to develop.
                        </p>
                        <p className="leading-[30px]">
                          Other researchers are investigating the possibility
                          that under certain conditions, a cluster of unstable
                          genes may affect brain development in an unexpected
                          way, resulting in Autism. Still other researchers are
                          investigating complications during pregnancy or
                          delivery as well as environmental factors such as
                          viral infections, metabolic imbalances, and exposure
                          to chemicals.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-5 md:flex-row">
                      <Image
                        src={factoautism}
                        alt="factoautism "
                        className="md:w-1/2"
                      />
                      <div className="space-y-3 md:w-1/2">
                        <p className="text-3xl font-bold text-[#8c003b]">
                          Genetic Vulnerability
                        </p>
                        <p className="leading-[30px] text-[#a60649]">
                          Autism tends to occur more frequently than expected
                          among individuals who have certain medical conditions,
                          including fragile X syndrome (FXS), tuberous
                          sclerosis, congenital rubella syndrome (CRS), and
                          untreated phenylketonuria (PKU). Some harmful
                          substances ingested during pregnancy also have been
                          associated with an increased likelihood of Autism.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <VavBorder />

            <div className="w-full rotate-180 overflow-hidden leading-[0]">
              <div className="custom-shape-divider-top-1746940280">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    className="shape-fill"
                    fill="#2B7FFF"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="bg-primary px-3 py-9">
              <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row">
                <div className="space-y-14 md:w-1/2">
                  <p className="text-5xl font-extrabold">
                    Connect to support <br className="hidden md:block" /> from
                    the Autism <br className="hidden md:block" /> Society
                  </p>
                  <Button variant="destructive">Get Support</Button>
                </div>
                <Image src={getConnectimg} alt="getConnectimg" />
              </div>
            </div>
          </div>

          <div>
            <VavBorder />

            <div className="mx-auto max-w-7xl space-y-5 px-3">
              <p className="text-center text-4xl font-extrabold">
                Vidio <span className="text-primary">Testimonials</span>
              </p>
              <TesomonialSlider />
            </div>
          </div>

          <div>
            <VavBorder />
            <div className="mx-auto max-w-7xl space-y-5 px-3">
              <p className="text-center text-4xl font-extrabold">
                Connect to <span className="text-primary">Knowledge</span>
              </p>

              <div className="flex flex-col gap-5 md:flex-row">
                <div className="md:w-1/2">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-primary cursor-pointer rounded-b-none bg-gradient-to-r from-orange-300 to-orange-500 px-3 text-2xl font-bold">
                        {" "}
                        Understanding Autism
                      </AccordionTrigger>
                      <AccordionContent className="bg-gradient-to-r from-orange-300 to-orange-500 px-3 text-[18px]">
                        What is Autism Spectrum Disorder? Learn about
                        prevalence, signs & characteristics, causes, screening &
                        diagnosis, and more.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-primary cursor-pointer rounded-none bg-gradient-to-r from-orange-300 to-orange-500 px-3 text-2xl font-bold">
                        {" "}
                        Autism Acceptance Month
                      </AccordionTrigger>
                      <AccordionContent className="bg-gradient-to-r from-orange-300 to-orange-500 px-3 text-[18px]">
                        This April, get connected as we #CelebrateDifferences
                        for Autism Acceptance Month. Download resources, host a
                        fundraiser, connect to each other.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-primary cursor-pointer rounded-none bg-gradient-to-r from-orange-300 to-orange-500 px-3 text-2xl font-bold">
                        {" "}
                        Resources by Topic
                      </AccordionTrigger>
                      <AccordionContent className="bg-gradient-to-r from-orange-300 to-orange-500 px-3 text-[18px]">
                        From employment to education to health and wellness,
                        explore helpful resources to get the support you need.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-primary cursor-pointer rounded-none bg-gradient-to-r from-orange-300 to-orange-500 px-3 text-2xl font-bold">
                        {" "}
                        News & Updates
                      </AccordionTrigger>
                      <AccordionContent className="bg-gradient-to-r from-orange-300 to-orange-500 px-3 text-[18px]">
                        Change is happening every day. Stay connected with the
                        latest news on our blog, where we share national
                        statements, organizational updates, and community
                        stories.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-primary cursor-pointer rounded-none bg-gradient-to-r from-orange-300 to-orange-500 px-3 text-2xl font-bold">
                        {" "}
                        Screening & Diagnosis
                      </AccordionTrigger>
                      <AccordionContent className="bg-gradient-to-r from-orange-300 to-orange-500 px-3 text-[18px]">
                        Learn more about the signs and characteristics of
                        Autism, as well as screening and diagnosis options.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger className="text-primary cursor-pointer rounded-none bg-gradient-to-r from-orange-300 to-orange-500 px-3 text-2xl font-bold">
                        {" "}
                        Vaccine Education Initiative
                      </AccordionTrigger>
                      <AccordionContent className="bg-gradient-to-r from-orange-300 to-orange-500 px-3 text-[18px]">
                        The Vaccine Education Initiative (VEI) aims to increase
                        vaccine education, confidence, and access through
                        grassroots efforts.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                      <AccordionTrigger className="text-primary cursor-pointer rounded-none bg-gradient-to-r from-orange-300 to-orange-500 px-3 text-2xl font-bold">
                        {" "}
                        Get Support
                      </AccordionTrigger>
                      <AccordionContent className="bg-gradient-to-r from-orange-300 to-orange-500 px-3 text-[18px]">
                        The Autism Society is here to support you. From the
                        National Helpline to the affiliate network, we strive to
                        provide the help you need.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="h-fit overflow-hidden md:w-1/2">
                  <Image src={faqImge} alt="faqImge " className="h-fit" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <VavBorder />
          </div>
        </div>
      </div>
    </main>
  );
}
