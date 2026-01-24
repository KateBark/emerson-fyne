import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

export default function Header() {
  return (
    <header className="px-4 py-4 md:px-8 md:py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto text-sm md:text-lg">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
