import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-10 text-base">
      <ul className="flex gap-16 items-center">
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
            href="/music"
            className="hover:text-accent-400 transition-colors"
          >
            WRITING
          </Link>
        </li>
        <li>
          <Link
            href="/music"
            className="hover:text-accent-400 transition-colors"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
