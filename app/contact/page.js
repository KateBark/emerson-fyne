import Image from "next/image";
import tower from "@/public/tower.jpg";
import { germinal } from "../fonts/germinal";

export const metadata = {
  title: "Contact |",
};

export default function Page() {
  return (
    <div className="px-4 md:px-0">
      <h1 className="md:text-5xl text-center pb-10">C O N T A C T</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 md:gap-x-24 gap-y-12 md:gap-y-32 items-center pt-12">
        <div className="col-span-1 md:col-span-2">
          <div className="w-full">
            <Image
              src={tower}
              alt="tower"
              className="w-full h-auto object-cover rounded"
            />
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 mt-8 md:mt-20">
          <p className="mb-5">For sync licensing & other inquiries:</p>
          <div>
            <a
              className="hover:text-accent-300 break-words"
              href="mailto:emerson@emersonfyne.com"
            >
              emerson@emersonfyne.com
            </a>
          </div>
          <div className="pt-5">
            <a
              className="hover:text-accent-300"
              href="https://www.linkedin.com/in/emerson-fyne/"
              target="_blank"
              rel="noopener noreferrer"
            >
              message through LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
