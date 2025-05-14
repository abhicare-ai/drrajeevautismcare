import Image from "next/image";
import ausi from "@/assets/download.jpeg";
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
                  Our <span className="text-primary">Mission </span>
                </p>
                <p className="font-extrabold">Mission</p>
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
  <p className="text-4xl font-extrabold">
    Mission <span className="text-primary">Statement</span>
  </p>

  <div className="space-y-3">
    <p>
      <span className="font-bold">Our mission</span> is to support autistic people to have fulfilling and productive working relationships in inclusive and positive environments. We do this by:
    </p>
    <ul className="marker:text-primary list-disc space-y-3 pl-6 marker:text-2xl">
      <li className="text-gray-700">
        Enabling autistic people to find and be successful in suitable work
      </li>
      <li className="text-gray-700">
        Encouraging providers of work to employ autistic people and recognize the benefits they can bring to the workplace
      </li>
      <li className="text-gray-700">
        Building confidence among autistic individuals by highlighting their strengths
      </li>
      <li className="text-gray-700">
        Promoting the creation of inclusive work environments where all individuals, regardless of their neurodiversity, are valued
      </li>
      <li className="text-gray-700">
        Supporting employers to understand and accommodate the unique needs of autistic individuals in the workplace
      </li>
    </ul>
  </div>

  <div className="space-y-3">
    <p>
      <span className="font-bold">Our approach</span> is to provide evidence-based guidance on all aspects of autism in the workplace. Drawing from validated academic research, best practices, and legal obligations, we ensure that our strategies are both effective and ethically sound.
    </p>
    <ul className="marker:text-primary list-disc space-y-3 pl-6 marker:text-2xl">
      <li className="text-gray-700">
        Collaborating with businesses to create workplaces that are more inclusive for autistic employees
      </li>
      <li className="text-gray-700">
        Offering training for employers and employees to better understand autism and how it affects the workplace
      </li>
      <li className="text-gray-700">
        Advocating for policies that support neurodiversity and inclusive hiring practices
      </li>
    </ul>
  </div>

  <div className="space-y-3">
    <p>
      <span className="font-bold">Our strategic imperative</span> is to improve employment outcomes for autistic people. The key priorities are:
    </p>
    <ul className="marker:text-primary list-disc space-y-3 pl-6 marker:text-2xl">
      <li className="text-gray-700">
        Helping more autistic people enter meaningful work: whether employment, internships, voluntary work, or otherwise
      </li>
      <li className="text-gray-700">
        Assisting autistic individuals in succeeding in the workplace and realizing the personal fulfillment that meaningful work can bring
      </li>
      <li className="text-gray-700">
        Supporting employers to identify roles where the strengths of autistic people make them particularly suited to
      </li>
      <li className="text-gray-700">
        Promoting policies that encourage employers to adjust their workplace so autistic individuals can succeed in their work
      </li>
      <li className="text-gray-700">
        Providing evidence-based methods, approaches, and tools for improving employment outcomes
      </li>
    </ul>
  </div>
</div>

      </div>
    </main>
  );
}
