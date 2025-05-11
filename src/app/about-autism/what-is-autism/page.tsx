import Image from "next/image";
import ausi from "@/assets/autism-exp-header-img.png";
import VavBorder from "@/components/VavBorder";
import dks from "@/assets/asd-img.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dot } from "lucide-react";
import jhjk from "@/assets/parallax_02.png";
import hjd from "@/assets/dms5-img.jpg";

export default function Page() {
  return (
    <main className="w-full space-y-14">
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
                  fill="#aac7f2"
                ></path>
              </svg>
            </div>
          </div>

          <div className="relative z-10 flex flex-col gap-5 space-y-5 bg-[#aac7f2] text-slate-800 md:flex-row">
            <div className="flex items-center justify-center md:w-1/2">
              <div className="space-y-5">
                <p className="text-4xl font-extrabold">
                  What Is <span className="text-primary">Autism</span>
                </p>
                <p className="font-extrabold">Understanding Autism</p>
              </div>
            </div>
            <Image src={ausi} alt="ausi" />
          </div>
          {/* Wave SVG divider */}
          <div className="w-full overflow-hidden leading-[0]">
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
                  fill="#aac7f2"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div>
        <VavBorder />
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3 md:flex-row">
          <Image src={dks} alt="dks" className="" />
          <div className="space-y-5 md:w-1/2">
            <p className="text-4xl font-extrabold">
              Definition Of <span className="text-primary">Autism</span>
            </p>
            <div className="space-y-3">
              <p className="leading-[30px]">
                Autism Spectrum Disorder (ASD), hereafter referred to as Autism
                (which includes Asperger’s Disorder and Pervasive Developmental
                Disorder – Not Otherwise Specified [PDD-NOS]), is a complex,
                lifelong developmental condition that typically appears during
                early childhood and can impact a person’s social skills,
                communication, relationships, and self-regulation. The Autism
                experience is different for everyone. It is defined by a certain
                set of behaviors and is often referred to as a “spectrum
                condition” that affects people differently and to varying
                degrees.
              </p>
              <p className="leading-[30px]">
                While there is currently no known single cause of Autism, early
                diagnosis helps a person receive resources that can support the
                choices and opportunities needed to live fully.
              </p>
              <p className="leading-[30px]">
                Autism is considered a spectrum because the severity of symptoms
                and the ways in which it affects an individual can vary widely.
                Some individuals with Autism may have significant intellectual
                and developmental challenges, while others may have average or
                above-average intelligence and may excel in specific areas, such
                as mathematics, music, or art. The range of abilities and needs
                is vast, which is why Autism is often referred to as a spectrum
                disorder.
              </p>
              <p className="leading-[30px]">
                Individuals with Autism may also experience difficulties with
                sensory processing, where they might be overly sensitive or
                under-sensitive to stimuli such as lights, sounds, textures, or
                smells. Early intervention, tailored to the individual’s
                specific needs, can significantly improve their ability to
                communicate, interact socially, and manage day-to-day
                activities. Recognizing Autism early allows for a more inclusive
                and supportive environment to foster personal growth and
                development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
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
                fill="#00464D"
              ></path>
            </svg>
          </div>
        </div>

        <div className="bg-[#00464D] px-3">
          <div className="mx-auto max-w-7xl pb-28">
            <Tabs defaultValue="type1" className="text-card">
              <TabsList>
                <TabsTrigger value="type1">Screening & Diagnosis</TabsTrigger>
                <TabsTrigger value="type2">Prevalence</TabsTrigger>
              </TabsList>
              <TabsContent value="type1" className="space-y-5">
                <p className="text-2xl font-bold">Screening & Diagnosis</p>
                <div className="flex flex-col space-y-3 md:flex-row">
                  <div className="md:w-1/2">
                    <p>
                      Autism is characterized in the{" "}
                      <a
                        href="https://www.rajeevclinic.com/"
                        target="_blank"
                        className="font-bold underline"
                      >
                        https://www.rajeevclinic.com/
                      </a>{" "}
                      which is used by clinicians to diagnose Autism by:
                      Persistent differences in communication, interpersonal
                      relationships, and social interaction across different
                      environments. What this can look like:
                    </p>
                    <p className="flex items-center gap-2">
                      {" "}
                      <Dot className="size-72" /> Being nonverbal, nonspeaking,
                      or having atypical speech patterns, having trouble
                      understanding nonverbal communication, difficulty making
                      and keeping friends, difficulty maintaining typical
                      back-and-forth conversational style.
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <p>
                      Restricted and repetitive behavior, patterns, activities
                      and interests. What this can look like:
                    </p>
                    <p className="flex items-center gap-2">
                      {" "}
                      <Dot className="size-72" />
                      Repeating sounds or phrases (echolalia), repetitive
                      movements, preference for sameness and difficulty with
                      transition or routine, rigid or highly restricted and
                      intense interests, extreme sensitivity to, or
                      significantly lower sensitivity to, sensory stimuli.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="type2" className="space-y-5">
                <p className="text-2xl font-bold">Prevalence</p>
                <div className="space-y-3">
                  <div className="space-y-5">
                    <p>
                      Autism is prevalent across the world, although tracking
                      rates can vary due to differences in reporting. In 2023,
                      the Centers for Disease Control and Prevention (CDC)
                      issued its Autism prevalence report.{" "}
                    </p>
                    <p className="flex items-center gap-2">
                      {" "}
                      <Dot /> The report concluded that the prevalence of Autism
                      had risen to 1 in every 36 – more than three times as
                      great as the 2004 rate of 1 in 125.
                    </p>
                    <p className="flex items-center gap-2">
                      {" "}
                      <Dot /> Children who receive an Autism diagnosis by age 4,
                      are fifty times more likely to receive services.
                    </p>
                    <p className="flex items-center gap-2">
                      {" "}
                      <Dot /> The 2023 report noted that more White and Black
                      children were identified with Autism than Hispanic
                      children.
                    </p>
                    <p className="flex items-center gap-2">
                      {" "}
                      <Dot /> Previous studies have shown, that children of
                      color may still receive their diagnoses later than White
                      children. Stigma, lack of access to healthcare services
                      due to non-citizenship or low income, and non-English
                      primary language are potential barriers to the early
                      identification of Hispanic children and children of color
                      with Autism.
                    </p>
                    <p className="flex items-center gap-2">
                      {" "}
                      <Dot /> Currently, boys are also approximately 4 times
                      more likely to have an Autism diagnosis than girls of the
                      same age. However, recent research suggests that girls may
                      not display characteristics of Autism in the same way as
                      boys and might go undiagnosed because of their different
                      presentation.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <Image src={jhjk} alt="jhjk" className="w-full" />
      </div>

      <div>
        <VavBorder />
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3 md:flex-row">
          <div className="space-y-5 md:w-1/2">
            <p className="text-4xl font-extrabold">
              The DSM-
              <span className="text-primary">5</span>
            </p>
            <p>
              The DSM-5 is used by clinicians to diagnose Autism and the
              features of Autism are described in this document. The DSM-5
              criteria require that the core features of Autism be present in
              early childhood. However, for some children, the symptoms may not
              fully manifest until social demands exceed the person’s capacity
              to cope with them. In addition, challenges may be masked by
              learned coping strategies and support.
            </p>
          </div>
          <Image src={hjd} alt="hjd" />
        </div>
      </div>

      <div>
        <VavBorder />
      </div>
    </main>
  );
}
