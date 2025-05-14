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
                  Contact <span className="text-primary">Us</span>
                </p>
                <p className="font-extrabold">Contact us</p>
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
        <div className="mx-auto grid max-w-7xl gap-5 px-3 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-primary text-card space-y-5 rounded-md border p-3 text-center">
            <p className="font-bold">Ranchi Clinic</p>
            <p className="">
              Elixir Tower, Sethia Compound, Opp. Ranchi Club, Ranchi-834001
              (Jharkhand)
            </p>
            <p className="font-bold">+91 9204439171</p>
            <p className="font-bold">+91 651-2330818</p>
            <p className="font-bold">abhihomoeo@gmail.com</p>
          </div>

          <div className="bg-primary text-card space-y-5 rounded-md border p-3 text-center">
            <p className="font-bold">Patna Clinic</p>
            <p className="">
              ICICI BANK BUILDING, Abha Kunj, Gola Road, Near Shiv Mandir,
              Patna-801503 (Bihar)
            </p>
            <p className="font-bold">+91 9153881402</p>
            <p className="font-bold">+91 9153881403</p>
            <p className="font-bold">abhihomoeo@gmail.com</p>
          </div>

          <div className="bg-primary text-card space-y-5 rounded-md border p-3 text-center">
            <p className="font-bold">Delhi Clinic</p>
            <p className="">
              Tower(K), Flat No. 92, 11th Avenue, Gaur City-2, Kishan Chowk,
              Sector-16-C, Greater Noida - 201009 (Uttar Pradesh)
            </p>
            <p className="font-bold">+91 9234400007</p>
            <p className="font-bold">abhihomoeo@gmail.com</p>
          </div>

          <div className="bg-primary text-card space-y-5 rounded-md border p-3 text-center">
            <p className="font-bold">Spectrum@Metro Clinic</p>
            <p className="">
              Shop No. C-11, 5th Floor, Tower C Spectrum@metro GH Eco City Plot
              C and D, Sector 75, Noida - 201304, Uttar Pradesh
            </p>
            <p className="font-bold">+91 9263778607</p>
            <p className="font-bold">abhihomoeo@gmail.com</p>
          </div>

          <div className="bg-primary text-card space-y-5 rounded-md border p-3 text-center">
            <p className="font-bold">Kolkata Clinic</p>
            <p className="">
              147/1, B.B. GANGULY STREET, PS-MUCHIPARA, SEALDAH, Kolkata-700012
              (West Bengal)
            </p>
            <p className="font-bold">+91 9153881401</p>
            <p className="font-bold">abhihomoeo@gmail.com</p>
          </div>
        </div>
      </div>
    </main>
  );
}
