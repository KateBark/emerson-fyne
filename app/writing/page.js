import supabase from "@/app/_lib/supabase";
import WritingList from "@/app/_components/WritingList";

import Image from "next/image";
import tunnel from "@/public/forest-tunnel.jpg";
import { germinal } from "../fonts/germinal";
import LyricsLink from "../_components/LyricsLink";

import { getLyrics } from "../_lib/data-service";
import { getFeatureLyrics } from "../_lib/data-service";

export const metadata = {
  title: "Writing |",
};

export default async function Page() {
  // const supabase = createClient();
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
        <div className="col-span-4">
          <h1 className={`${germinal.className} text-center text-7xl pb-8`}>
            W r i t i n g
          </h1>
          <h2 className={`${germinal.className} text-center text-6xl pb-8`}>
            lyrics
          </h2>
        </div>
      </div>
      <div className="pt-10">
        <WritingList writings={writings} />
      </div>
    </main>
  );
}

// export default async function Page() {
//   const lyrics = await getLyrics([1, 2, 3]);
//   const featureLyrics = await getFeatureLyrics(4);

//   return (
//     <div>
//       <h1 className="text-5xl text-center pb-10">W R I T I N G</h1>
//       <div
//         className={`${germinal.className} flex text-6xl justify-center pb-10`}
//       >
//         <h2 className="pr-20">l y r i c s</h2>
//       </div>

//       <div className="grid grid-cols-4 gap-x-24 gap-y-32 items center pt-12">
//         <div className="col-span-2">
//           <Image src={tunnel} alt="running through fields" />
//         </div>
//         <div className="col-span-2">
//           <h2 className="text-center text-lg">Featured:</h2>

// //           {featureLyrics && <LyricsLink lyrics={featureLyrics} />}
// //         </div>
// //       </div>
//       <div>
//         {lyrics.length > 0 && (
//           <div className="m-40">
//             {lyrics.map((lyrics) => (
//               <LyricsLink key={lyrics.id} lyrics={lyrics} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
