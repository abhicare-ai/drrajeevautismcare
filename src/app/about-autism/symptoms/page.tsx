import Image from "next/image";
import ausi from "@/assets/signs-slider-placeholder-1.png";
import VavBorder from "@/components/VavBorder";
import jhdj from "@/assets/ind-mother-helping-her-son-doing-homework-in-kitchen (1).png";
import Sidebar from "../Sidebar";
import mdks from "@/assets/child-playing-with-blocks-by-stacking-them.png";

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
                  Signs and Symptoms of{" "}
                  <span className="text-primary">Autism</span>
                </p>
                <p className="font-extrabold">Understanding Symptoms</p>
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
              Signs and Symptoms of <span className="text-primary">Autism</span>{" "}
              Spectrum Disorder
            </p>
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="space-y-5 md:w-1/2">
                <p className="text-primary">Key points</p>
                <ul className="marker:text-primary list-disc space-y-3 pl-6 marker:text-2xl">
                  <li className="text-gray-700">
                    <strong className="font-bold">
                      Autism Spectrum Disorder (ASD)
                    </strong>{" "}
                    is a developmental disability caused by differences in the
                    brain.
                  </li>
                  <li className="text-gray-700">
                    People with ASD often have problems with social
                    communication and interaction, and restricted or repetitive
                    behaviors or interests.
                  </li>
                  <li className="text-gray-700">
                    People with ASD may also have different ways of learning,
                    moving, or paying attention.
                  </li>
                  <li className="text-gray-700">
                    It is important to note that some people without ASD might
                    also have some of these symptoms. But for people with ASD,
                    these characteristics can make life very challenging.
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
              <p className="text-2xl font-extrabold">
                Signs and <span className="text-primary">symptoms</span>
              </p>
              <p className="text-2xl">
                Social communication and interaction skills
              </p>
              <p className="font-bold">
                Social communication and interaction skills can be challenging
                for people with ASD.
              </p>
              <p className="font-bold">
                Examples of social communication and social interaction
                characteristics related to ASD can include
              </p>

              <ul className="marker:text-primary list-disc space-y-3 pl-6 marker:text-2xl">
                <li className="text-gray-700">
                  Avoids or does not keep eye contact
                </li>
                <li className="text-gray-700">
                  Does not respond to name by 9 months of age
                </li>
                <li className="text-gray-700">
                  Does not show facial expressions such as happy, sad, angry,
                  and surprised by 9 months of age
                </li>
                <li className="text-gray-700">
                  Does not play simple interactive games like pat-a-cake by 12
                  months of age
                </li>
                <li className="text-gray-700">
                  Uses few or no gestures by 12 months of age (for example, does
                  not wave goodbye)
                </li>
                <li className="text-gray-700">
                  Does not share interests with others by 15 months of age (for
                  example, shows you an object that they like)
                </li>
                <li className="text-gray-700">
                  Does not point to show you something interesting by 18 months
                  of age
                </li>
                <li className="text-gray-700">
                  Does not notice when others are hurt or upset by 24 months (2
                  years) of age
                </li>
                <li className="text-gray-700">
                  Does not notice other children and join them in play by 36
                  months (3 years) of age
                </li>
                <li className="text-gray-700">
                  Does not pretend to be something else, like a teacher or
                  superhero, during play by 48 months (4 years) of age
                </li>
                <li className="text-gray-700">
                  Does not sing, dance, or act for you by 60 months (5 years) of
                  age
                </li>
              </ul>
            </div>
            <div className="space-y-5">
              <p className="text-2xl">
                Restricted or repetitive behaviors or interests
              </p>
              <p className="font-bold">
                People with ASD have behaviors or interests that can seem
                unusual. These behaviors or interests set ASD apart from
                conditions defined by problems with social communication and
                interaction only.
              </p>
              <p className="font-bold">
                Examples of restricted or repetitive behaviors and interests
                related to ASD can include
              </p>

              <ul className="marker:text-primary list-disc space-y-3 pl-6 marker:text-2xl">
                <li className="text-gray-700">
                  Lines up toys or other objects and gets upset when order is
                  changed
                </li>
                <li className="text-gray-700">
                  Repeats words or phrases over and over (called echolalia)
                </li>
                <li className="text-gray-700">
                  Plays with toys the same way every time
                </li>
                <li className="text-gray-700">
                  Is focused on parts of objects (for example, wheels)
                </li>
                <li className="text-gray-700">Gets upset by minor changes</li>
                <li className="text-gray-700">Has obsessive interests</li>
                <li className="text-gray-700">Must follow certain routines</li>
                <li className="text-gray-700">
                  Flaps hands, rocks body, or spins self in circles
                </li>
                <li className="text-gray-700">
                  Has unusual reactions to the way things sound, smell, taste,
                  look, or feel
                </li>
              </ul>
            </div>

            <div className="space-y-5">
              <Image src={mdks} alt="mdks" />
              <p>
                Contact your child&lsquo;s doctor if you have any concerns about
                your child&lsquo;s development.
              </p>
            </div>

            <div className="space-y-5">
              <p className="text-2xl">Other characteristics</p>
              <p className="font-bold">
                Most people with ASD have other related characteristics. These
                might include
              </p>

              <ul className="marker:text-primary list-disc space-y-3 pl-6 marker:text-2xl">
                <li className="text-gray-700">Delayed language skills</li>
                <li className="text-gray-700">Delayed movement skills</li>
                <li className="text-gray-700">
                  Delayed cognitive or learning skills
                </li>
                <li className="text-gray-700">
                  Hyperactive, impulsive, and/or inattentive behavior
                </li>
                <li className="text-gray-700">Epilepsy or seizure disorder</li>
                <li className="text-gray-700">
                  Unusual eating and sleeping habits
                </li>
                <li className="text-gray-700">
                  Gastrointestinal issues (for example, constipation)
                </li>
                <li className="text-gray-700">
                  Unusual mood or emotional reactions
                </li>
                <li className="text-gray-700">
                  Anxiety, stress, or excessive worry
                </li>
                <li className="text-gray-700">
                  Lack of fear or more fear than expected
                </li>
              </ul>
              <p className="font-bold">
                It is important to note that children with ASD may not have all
                or any of the behaviors listed as examples here.
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
