import Image from "next/image";
import ausi from "@/assets/identifying_autism.png";
import VavBorder from "@/components/VavBorder";
import jhdj from "@/assets/educator-with-student-high-fiving-in-library.png";
import Sidebar from "../Sidebar";
import mksd from "@/assets/child-writing-and-coloring-in-a-classroom.png";

export default function Page() {
  return (
    <main>
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
                  Screening & <span className="text-primary">Diagnosis</span>
                </p>
                <p className="font-extrabold">Identifying Autism</p>
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
      <div className="space-y-14">
        <div>
          <VavBorder />
          <div className="mx-auto max-w-7xl space-y-5 px-3">
            <p className="text-center text-2xl font-extrabold md:text-4xl">
              Treatment and Intervention for{" "}
              <span className="text-primary">Autism</span> Spectrum Disorder
            </p>
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="space-y-5 md:w-1/2">
                <p className="text-primary">Key points</p>
                <ul className="marker:text-primary list-disc space-y-3 pl-6 marker:text-2xl">
                  <li className="text-gray-700">
                    Current treatments for autism spectrum disorder (ASD) seek
                    to reduce symptoms that interfere with daily functioning and
                    quality of life.
                  </li>
                  <li className="text-gray-700">
                    Treatments can be given in education, health, community, or
                    home settings, or a combination of settings.
                  </li>
                  <li className="text-gray-700">
                    As individuals with ASD leave high school and grow into
                    adulthood, additional services can help improve health and
                    daily functioning, and facilitate social and community
                    engagement.
                  </li>
                </ul>
              </div>
              <Image src={jhdj} alt="jhdj" className="md:w-1/2" />
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3 md:flex-row">
          <div className="space-y-14">
            <div className="space-y-5">
              <p className="text-2xl">Types of Treatments</p>
              <p className="font-bold">
                There are many types of treatments available. These treatments
                generally can be broken down into the following categories,
                although some treatments involve more than one approach:
              </p>

              <ul className="marker:text-primary list-disc space-y-3 pl-6 marker:text-2xl">
                <li className="text-primary underline">
                  {" "}
                  <a href="#Behavioral">Behavioral</a>
                </li>
                <li className="text-primary underline">
                  <a href="#Developmental">Developmental</a>
                </li>
                <li className="text-primary underline">
                  <a href="#Educational">Educational</a>
                </li>
                <li className="text-primary underline">
                  {" "}
                  <a href="#Social">Social-relational</a>
                </li>
                <li className="text-primary underline">
                  {" "}
                  <a href="#Pharmacological">Pharmacological</a>
                </li>
                <li className="text-primary underline">
                  <a href="#Psychological">Psychological</a>
                </li>
                <li className="text-primary underline">
                  <a href="#Complementary"> Complementary and alternative</a>
                </li>
              </ul>
            </div>

            <div className="space-y-5" id="Behavioral">
              <p className="text-2xl">Behavioral approaches</p>
              <p className="font-bold">
                Behavioral approaches focus on changing behaviors by
                understanding what happens before and after the behavior.
                Behavioral approaches have the most evidence for treating
                symptoms of ASD. They have become widely accepted among
                educators and healthcare professionals and are used in many
                schools and treatment clinics. A notable behavioral treatment
                for people with ASD is called{" "}
                <span className="text-primary font-extrabold">
                  applied behavior analysis (ABA)
                </span>
                . ABA encourages desired behaviors and discourages undesired
                behaviors to improve a variety of skills. Progress is tracked
                and measured.
              </p>
              <p className="font-bold">
                Two ABA teaching styles are{" "}
                <span className="text-primary font-extrabold">
                  discrete trial training (DTT)
                </span>{" "}
                and{" "}
                <span className="text-primary font-extrabold">
                  {" "}
                  pivotal response training (PRT)
                </span>
                .
              </p>
              <ul className="marker:text-primary list-disc space-y-3 pl-6 marker:text-2xl">
                <li className="text-gray-700">
                  DTT uses step-by-step instructions to teach a desired behavior
                  or response. Lessons are broken down into their simplest
                  parts, and desired answers and behaviors are rewarded.
                  Undesired answers and behaviors are ignored.
                </li>
                <li className="text-gray-700">
                  PRT takes place in a natural setting rather than clinic
                  setting. The goal of PRT is to improve a few &ldquo;pivotal
                  skills&ldquo; that will help the person learn many other
                  skills. One example of a pivotal skill is being able to
                  initiate communication with others.
                </li>
              </ul>
            </div>

            <div className="space-y-5" id="Educational">
              <p className="text-2xl">Educational approaches</p>
              <Image src={mksd} alt="mksd" className="rounded-md" />

              <p className="font-bold">
                Educational treatments are given in a classroom setting. One
                type of educational approach is the Treatment and Education of
                Autistic and Related Communication-Handicapped Children (TEACCH)
                approach.
              </p>
              <p className="font-bold">
                Educational treatments are given in a classroom setting. One
                type of educational approach is the{" "}
                <span className="text-primary font-extrabold">
                  Treatment and Education of Autistic and Related
                  Communication-Handicapped Children (TEACCH){" "}
                </span>{" "}
                approach. TEACCH is based on the idea that people with autism
                thrive on consistency and visual learning. It provides teachers
                with ways to adjust the classroom structure and improve academic
                and other outcomes. For example, daily routines can be written
                or drawn and placed in clear sight. Boundaries can be set around
                learning stations. Verbal instructions can be complemented with
                visual instructions or physical demonstrations.
              </p>
            </div>

            <div className="space-y-5" id="Social">
              <p className="text-2xl">Social-relational approaches</p>
              <p className="font-bold">
                Social-relational treatments focus on improving social skills
                and building emotional bonds. Some social-relational approaches
                involve parents or peer mentors.
              </p>

              <ul className="marker:text-primary list-disc space-y-3 pl-6 marker:text-2xl">
                <li className="text-gray-700">
                  The{" "}
                  <span className="text-primary font-bold">
                    {" "}
                    Developmental, Individual Differences,
                    Relationship-Based{" "}
                  </span>{" "}
                  model{" "}
                  <span className="text-primary font-bold">
                    (also called DIR or &ldquo;Floor Time&ldquo;)
                  </span>{" "}
                  encourages parents and therapists to follow the interests of
                  the individual to expand opportunities for communication.
                </li>
                <li className="text-gray-700">
                  The{" "}
                  <span className="text-primary font-bold">
                    {" "}
                    Relationship Development Intervention
                  </span>{" "}
                  (RDI) model involves activities that increase motivation,
                  interest, and abilities to participate in shared social
                  interactions.
                </li>
                <li className="text-gray-700">
                  <span className="text-primary font-bold">
                    {" "}
                    Social Stories
                  </span>{" "}
                  provide simple descriptions of what to expect in a social
                  situation.
                </li>
                <li className="text-gray-700">
                  <span className="text-primary font-bold">
                    {" "}
                    Social skills groups
                  </span>{" "}
                  provide opportunities for people with ASD to practice social
                  skills in a structured environment.
                </li>
              </ul>
            </div>

            <div className="space-y-5" id="Pharmacological">
              <p className="text-2xl">Pharmacological approaches</p>
              <p className="font-bold">
                Some medications treat co-occurring symptoms (those that happen
                along with ASD) and can help people with ASD function better.
                For example, medication might help manage high energy levels,
                inability to focus, or self-harming behavior, such as head
                banging or hand biting. Medication can also help manage
                co-occurring psychological conditions, such as anxiety or
                depression, in addition to medical conditions such as seizures,
                sleep problems, or stomach or other gastrointestinal problems.
              </p>
              <p className="font-bold">
                It is important to work with a doctor who has experience in
                treating people with ASD when considering the use of medication.
                This applies to both prescription medication and
                over-the-counter medication. Individuals, families, and doctors
                must work together to monitor progress and reactions to be sure
                any negative side effects of the medication do not outweigh the
                benefits.
              </p>
            </div>

            <div className="space-y-5" id="Psychological">
              <p className="text-2xl">Psychological approaches</p>
              <p className="font-bold">
                Psychological approaches can help people with ASD cope with
                anxiety, depression, and other mental health issues.{" "}
                <span className="text-primary font-extrabold">
                  Cognitive-behavior therapy
                </span>{" "}
                (CBT) is one psychological approach that focuses on learning the
                connections between thoughts, feelings, and behaviors. During
                CBT, a therapist and the individual work together to identify
                goals and then change how the person thinks about a situation to
                change how they react to the situation.
              </p>
            </div>

            <div className="space-y-5" id="Complementary">
              <p className="text-2xl">
                Complementary and alternative treatments
              </p>
              <p className="font-bold">
                Some people with ASD and their families use treatments that do
                not fit into any of the other categories. These treatments are
                known as{" "}
                <span className="text-primary font-extrabold">
                  complementary and alternative
                </span>{" "}
                treatments. Complementary and alternative treatments are often
                used to supplement more traditional approaches. They might
                include special diets, herbal supplements, chiropractic care,
                animal therapy, arts therapy, mindfulness, or relaxation
                therapies. Individuals and families should always talk to their
                doctor before starting a complementary and alternative
                treatment.
              </p>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
      <div>
        <VavBorder />
      </div>
    </main>
  );
}
