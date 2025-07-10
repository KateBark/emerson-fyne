import Image from "next/image";
import tower from "@/public/tower.jpg";
import { germinal } from "../fonts/germinal";

export const metadata = {
  title: "Contact |",
};

export default function Page() {
  return (
    <div>
      <h1 className="text-5xl text-center pb-10">C O N T A C T</h1>

      <div className="grid grid-cols-4 gap-x-24 gap-y-32 items center pt-12">
        <div className="col-span-2">
          <Image src={tower} alt="running through fields" />
        </div>
        <div className="col-span-2 mt-20">
          <p className="mb-5">For sync licensing & other inquiries:</p>
          <div>
            <a
              className="hover:text-accent-300"
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
