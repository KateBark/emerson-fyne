import Link from "next/link";
import YouTubeIcon from "./YouTubeIcon";
import LinkedInIcon from "./LinkedInIcon";

export default function Footer() {
  return (
    <footer className="py-4 px-4 md:px-8 lg:px-40">
      <ul className="text-white items-center hover:text-accent-300 text-xs md:text-sm z-10 relative flex flex-col md:flex-row justify-center md:justify-around gap-4 md:gap-0">
        <li>
          <Link
            href="https://kate-bark-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kate Bark | © 2026
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
