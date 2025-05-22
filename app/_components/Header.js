import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

export default function Header() {
  return (
    <header className="px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto text-lg">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
