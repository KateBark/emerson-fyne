import Link from "next/link";
import YouTubeIcon from "./YouTubeIcon";
import LinkedInIcon from "./LinkedInIcon";

export default function Footer() {
  return (
    <footer className="py-4 px-40">
      <ul className="text-white items-center hover:text-accent-300 text-sm z-10 relative flex justify-around">
        <li>
          <Link
            href="https://www.linkedin.com/in/kate-bark/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kate Bark | © 2025
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/@emersonfyne"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/emerson-fyne/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
