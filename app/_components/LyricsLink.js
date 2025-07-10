import Link from "next/link";

export default function LyricsLink({ lyrics }) {
  const { title, lyrics_id } = lyrics;

  return (
    <div>
      <Link
        href="/music/{slug}"
        className="hover:text-accent-400 transition-colors"
      >
        <h2>{title}</h2>
      </Link>
    </div>
  );
}
