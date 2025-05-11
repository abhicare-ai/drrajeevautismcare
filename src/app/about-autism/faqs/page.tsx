import Image from "next/image";
import ausi from "@/assets/faq.jpg";
import aska from "@/assets/QA-banner-image.png";
import VavBorder from "@/components/VavBorder";
import Sidebar from "../Sidebar";

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
                  FAQs Autism Spectrum{" "}
                  <span className="text-primary">Disorder</span>
                </p>
                <p className="font-extrabold">
                  Frequently Asked Questions about Autism Spectrum Disorder
                </p>
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
              Frequently Asked Questions about Autism Spectrum Disorder
            </p>
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="space-y-5 md:w-1/2">
                <p className="text-primary">At a glance</p>
                <ul className="marker:text-primary list-disc space-y-3 pl-6 marker:text-2xl">
                  <li className="text-gray-700">
                    Answers to frequently asked questions (FAQs) about autism
                    spectrum disorder (ASD).
                  </li>
                </ul>
              </div>
              <Image src={aska} alt="aska" className="md:w-1/2" />
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3 md:flex-row">
          <div className="space-y-14">
            <ul className="space-y-5 ">
              <li className="space-y-3">
                <p className="font-bold">
                  Q: Are more children being diagnosed with ASD?
                </p>
                <p>
                  <span className="font-bold"> A:</span> CDC is working with
                  partners to study the prevalence of ASD over time so we can
                  find out if the number of children with ASD is rising,
                  dropping, or staying the same.
                </p>
                <p>
                  The prevalence of ASD among 8-year-olds has increased most
                  years since CDC began tracking ASD in 2000. Prevalence
                  estimates also vary across different communities. Increases
                  between years and differences across sites within a year are
                  likely due to a combination of factors including diagnostic
                  practices and access to services in communities. Equitable and
                  early identification of ASD is a public health priority so
                  children with ASD can receive services they may need to
                  achieve their full potential.
                </p>
              </li>

              <li className="space-y-3">
                <p className="font-bold">
                  Q: Can adults be diagnosed with ASD?
                </p>
                <p>
                  <span className="font-bold"> A:</span> Yes, adults can be
                  diagnosed with ASD. Diagnosis includes looking at the
                  person&lsquo;s medical history, watching the person&lsquo;s
                  behavior, and giving the person some psychological tests. But
                  it can be more challenging to diagnose an adult because it is
                  not always possible to know about the person&lsquo;s
                  development during the first few years of life, and a long
                  history of other diagnoses may complicate an ASD diagnosis.
                </p>
                <p>
                  Because the focus of ASD research has been on children, we
                  still have much to learn about the prevalence and causes of
                  ASD across the lifespan. Behavioral interventions can be
                  effective for adults coping with a new diagnosis of autism.
                </p>
              </li>

              <li className="space-y-3">
                <p className="font-bold">
                  Q: What are mitochondrial diseases or disorders?
                </p>
                <p>
                  <span className="font-bold"> A:</span> Mitochondria are tiny
                  parts of almost every cell in your body. Mitochondria are like
                  the power house of the cells. They turn sugar and oxygen into
                  energy that the cells need to work.
                </p>
                <p>
                  In mitochondrial diseases, the mitochondria cannot efficiently
                  turn sugar and oxygen into energy, so the cells do not work
                  correctly.
                </p>
                <p>
                  There are many types of mitochondrial disease, and they can
                  affect different parts of the body: the brain, kidneys,
                  muscles, heart, eyes, ears, and others. Mitochondrial diseases
                  can affect one part of the body or can affect many parts. They
                  can affect those parts mildly or very seriously.
                </p>
                <p>
                  Not everyone with a mitochondrial disease will show symptoms.
                  However, when discussing the group of mitochondrial diseases
                  that tend to affect children, symptoms usually appear in the
                  toddler and preschool years.
                </p>
                <p>Mitochondrial diseases and disorders are the same thing.</p>
              </li>

              <li className="space-y-3">
                <p className="font-bold">
                  Q: Is there a relationship between mitochondrial disease and
                  autism?
                </p>
                <p>
                  <span className="font-bold"> A:</span> A child with a
                  mitochondrial disease
                </p>
                <p>May also have an autism spectrum disorder,</p>
                <p>May have some of the symptoms or signs of autism, or</p>
                <p>May not have any signs or symptoms related to autism.</p>
                <p>
                  A child with autism may or may not have a mitochondrial
                  disease. When a child has both autism and a mitochondrial
                  disease, they sometimes have other problems as well, including
                  epilepsy, problems with muscle tone, and/or movement
                  disorders.
                </p>
                <p>
                  More research is needed to find out how common it is for
                  people to have autism and a mitochondrial disorder. Right now,
                  it seems rare. In general, more research about mitochondrial
                  disease and autism is needed.
                </p>
              </li>

              <li className="space-y-3">
                <p className="font-bold">
                  Q: What is regressive encephalopathy?
                </p>
                <p>
                  <span className="font-bold"> A:</span> Encephalopathy is a
                  medical term for a disease or disorder of the brain. It
                  usually means a slowing down of brain function. Regression
                  happens when a person loses skills that they used to have,
                  such as walking or talking or even being social.
                </p>
                <p>
                  Regressive encephalopathy means there is a disease or disorder
                  in the brain that makes a person lose skills they once had.
                </p>
                <p>
                  We know that sometimes children with mitochondrial diseases
                  seem to be developing as they should, but around toddler or
                  preschool age, they regress. The disease was there all the
                  time, but something happens that &ldquo;sets it off.&ldquo;
                  This could be something like malnutrition, an illness such as
                  flu, a high fever, or dehydration, or it could be something
                  else.
                </p>
              </li>

              <li className="space-y-3">
                <p className="font-bold">
                  Q: Is there a relationship between autism and encephalopathy?
                </p>
                <p>
                  <span className="font-bold"> A:</span> Most children with an
                  autism spectrum disorder do not have and have not had an
                  encephalopathy. Some children with an autism spectrum disorder
                  have had regression and some have had a regressive
                  encephalopathy.
                </p>
              </li>

              <li className="space-y-3">
                <p className="font-bold">
                  Q: What do we know about the relationship between
                  mitochondrial disease and other disorders related to the
                  brain?
                </p>
                <p>
                  <span className="font-bold"> A:</span> Different parts of the
                  brain have different functions. The area of the brain that is
                  damaged by a mitochondrial disease determines how the person
                  is impacted. This means that a person could have seizures,
                  trouble talking or interacting with people, difficulty eating,
                  muscle weakness, or other problems. They could have one issue
                  or several.
                </p>
              </li>

              <li className="space-y-3">
                <p className="font-bold">
                  Q: Do vaccines cause or worsen mitochondrial diseases?
                </p>
                <p>
                  <span className="font-bold"> A:</span> As of now, there are no
                  scientific studies that say vaccines cause or worsen
                  mitochondrial diseases. We do know certain illnesses that can
                  be prevented by vaccines, such as the flu, can trigger the
                  regression that is related to a mitochondrial disease. More
                  research is needed to determine if there are rare cases where
                  underlying mitochondrial disorders are triggered by anything
                  related to vaccines. However, we know that for most children,
                  vaccines are a safe and important way to prevent
                  life-threatening diseases.
                </p>
              </li>

              <li className="space-y-3">
                <p className="font-bold">
                  Q: Are all children routinely tested for mitochondrial
                  diseases? What about children with autism?
                </p>
                <p>
                  <span className="font-bold"> A:</span> Children are not
                  routinely tested for mitochondrial diseases. This includes
                  children with autism and other developmental delays.
                </p>

                <p>
                  Testing is not easy and may involve taking multiple samples of
                  blood, and often samples of muscle. Doctors decide whether
                  testing for mitochondrial diseases should be done based on a
                  child&lsquo;s signs and symptoms.
                </p>
              </li>

              <li className="space-y-3">
                <p className="font-bold">
                  Q: Should I have my child tested for a mitochondrial disease?
                </p>
                <p>
                  <span className="font-bold"> A:</span> If you are worried that
                  your child might have a mitochondrial disease, talk to your
                  child&lsquo;s doctor.
                </p>
              </li>
            </ul>
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
