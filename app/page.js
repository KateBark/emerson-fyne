import { germinal } from "./fonts/germinal";
import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg-forest.jpg";

export default function Page() {
  return (
    <main className="mt-12 md:mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="forest"
      />
      <div className="relative z-10 text-white text-center px-4">
        <h1 className={`${germinal.className} text-4xl md:text-8xl`}>
          Emerson~fyne
        </h1>
        <div className="flex flex-col md:flex-row justify-around gap-6 md:gap-0 mt-10 md:mt-20 text-2xl md:text-4xl">
          <Link href="/music" className="hover:text-accent-400">
            Music
          </Link>
          <Link href="/writing" className="hover:text-accent-400">
            Writing
          </Link>
        </div>
      </div>
    </main>
  );
}
