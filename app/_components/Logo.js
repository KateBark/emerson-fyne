import Link from "next/link";
import { germinal } from "../fonts/germinal";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10 text-white">
      <h1 className={`${germinal.className} text-5xl`}>e~f</h1>
    </Link>
  );
}

export default Logo;
