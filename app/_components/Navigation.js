import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-10 text-white text-xs md:text-base">
      <ul className="flex gap-4 md:gap-16 items-center">
        <li>
          <Link
            href="/music"
            className="hover:text-accent-400 transition-colors"
          >
            MUSIC
          </Link>
        </li>
        <li>
          <Link
            href="/writing"
            className="hover:text-accent-400 transition-colors"
          >
            WRITING
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-accent-400 transition-colors"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
