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
      <div className="grid grid-cols-1 md:grid-cols-9 gap-x-6 md:gap-x-24 gap-y-12 md:gap-y-32 items-center py-12">
        <div className="col-span-1 md:col-span-4">
          <div className="w-full">
            <Image
              src={tunnel}
              alt="forest tunnel"
              className="w-full h-auto object-cover rounded"
            />
          </div>
        </div>
        <div className="col-span-1 md:col-span-5">
          <h1
            className={`${germinal.className} text-center text-4xl md:text-6xl pb-4 md:pb-8`}
          >
            W r i t i n g /
          </h1>
          <h2
            className={`${germinal.className} text-center text-4xl md:text-6xl pb-4 md:pb-8`}
          >
            L y r i c s
          </h2>
        </div>
      </div>
      <div className="pt-10 px-4 md:px-0">
        <div className="mx-auto w-full md:max-w-4xl">
          <WritingList writings={writings} />
        </div>
      </div>
    </main>
  );
}
