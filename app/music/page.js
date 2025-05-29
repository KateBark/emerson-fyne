import Image from "next/image";
import running from "@/public/lady-running.jpg";

export const metadata = {
  title: "Emerson Fyne Music",
};

export default function Page() {
  return (
    <div>
      <h1 className="text-5xl text-center pb-10">MUSIC</h1>

      <div className="grid grid-cols-4 gap-x-24 gap-y-32 items center pt-12">
        <div className="col-span-2">
          <Image src={running} alt="running through fields" />
        </div>
      </div>
    </div>
  );
}
