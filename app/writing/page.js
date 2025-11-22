import supabase from "@/app/_lib/supabase";
import WritingList from "@/app/_components/WritingList";
import Image from "next/image";
import tunnel from "@/public/forest-tunnel.jpg";
import { germinal } from "../fonts/germinal";

export const metadata = {
  title: "Writing |",
};

export default async function Page() {
  const { data: writings } = await supabase
    .from("writings")
    .select("*")
    .eq("type", "lyrics");

  return (
    <main className="py-10">
      <div className="grid grid-cols-9 gap-x-24 gap-y-32 items-center py-12">
        <div className="col-span-4">
          <Image src={tunnel} alt="forest tunnel" />
        </div>
        <div className="col-span-2">
          <h1 className={`${germinal.className} text-center text-7xl pb-8`}>
            W r i t i n g s / L y r i c s
          </h1>
          {/* <h2 className={`${germinal.className} text-center text-6xl pb-8`}>
            lyrics
          </h2> */}
        </div>
      </div>
      <div className="pt-10">
        <WritingList writings={writings} />
      </div>
    </main>
  );
}
