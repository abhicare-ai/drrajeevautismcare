import Image from "next/image";
import ausi from "@/assets/4 (1).jpg";
import VavBorder from "@/components/VavBorder";

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
                  Our Treatment <span className="text-primary">Approach</span>
                </p>
                <p className="font-extrabold">Understand treatment approach</p>
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
        <div className="mx-auto max-w-7xl space-y-5 px-3">
          <p className="text-2xl font-bold">
            Autism Treatment Approach –{" "}
            <span className="text-primary">Abhi Home Hall</span>
          </p>
          <p>
            Ever since The Menninger Clinic was founded in 1925, we’ve been at
            the forefront of mental health treatment. With decades of
            experience, we know what works for people with complex, serious
            mental illness. We’ll help you every step of the way, too.
          </p>
          <p className="text-2xl font-bold">
            <span className="text-primary">Inpatient Treatment</span>
          </p>
          <p>
            Our inpatient treatment programs are designed to uncover the
            underlying issues related to autism while promoting a positive
            environment for learning and growth. Each treatment plan is
            individually tailored to meet the specific needs of the patient. We
            work with a team of professionals, including psychologists,
            occupational therapists, speech therapists, and behavioral
            specialists, to provide holistic care.
          </p>
          <p>
            Each patient is monitored closely to identify progress, challenges,
            and areas of improvement, with treatment plans continuously adjusted
            to help them achieve their fullest potential. With consistent
            support, our patients develop valuable social and communication
            skills that contribute to their well-being.
          </p>
          <p className="text-2xl font-bold">
            <span className="text-primary">Outpatient Treatment</span>
          </p>

          <p>
            Our outpatient services offer ongoing support for individuals who
            have made progress through inpatient care or those requiring
            periodic sessions. This service allows us to continue addressing
            behavioral and social challenges in a familiar and less intensive
            setting.
          </p>

          <p>
            We offer personalized therapy, including speech and language
            therapy, occupational therapy, and social skills training. We focus
            on enhancing daily living skills, helping individuals integrate
            better into home, school, and community settings.
          </p>
          <p className="text-2xl font-bold">
            <span className="text-primary">Treatment Philosophy</span>
          </p>

          <p>
            At Abhi Home Hall, we believe in the potential of every individual.
            Through our treatment programs, we emphasize family involvement,
            individualized care, and a supportive environment that fosters
            long-term growth. Our goal is to ensure each individual achieves
            optimal independence and can thrive within their community.
          </p>

          <p className="text-2xl font-bold">
            <span className="text-primary">Get in Touch</span>
          </p>
          <p>
            If you or a loved one are seeking treatment for autism, we encourage
            you to contact us for a personalized consultation. We are here to
            guide you every step of the way.
          </p>
        </div>
      </div>

      <div>
        <VavBorder />
      </div>
    </main>
  );
}
