import Image from "next/image";
import running from "@/public/lady-running.jpg";
import { germinal } from "../fonts/germinal";
import VideoCard from "../_components/VideoCard";
import Link from "next/link";

import { getVideos } from "../_lib/data-service";
import { getFeatureVideo } from "../_lib/data-service";

export const metadata = {
  title: "Music |",
};

export default async function Page() {
  const videos = await getVideos([1, 5, 4]);
  const featureVideo = await getFeatureVideo(2);

  return (
    <div>
      <h1 className="text-4xl md:text-5xl text-center pb-10">M U S I C</h1>
      <div
        className={`${germinal.className} flex flex-col md:flex-row text-4xl md:text-6xl justify-center items-center pb-10`}
      >
        <h2 className="md:pr-20 pb-2 md:pb-0">o f f i c i a l</h2>
        <h2>a u d i o</h2>
      </div>
      <div>
        <Link
          href="https://kb-ef-portfolio.vercel.app/emerson/hyaline-grace"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center text-lg hover:text-accent-400"
        >
          discover more...
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-9 gap-x-6 md:gap-x-24 gap-y-12 md:gap-y-32 items-center pt-12">
        <div className="col-span-1 md:col-span-4">
          <div className="w-full">
            <Image
              src={running}
              alt="running through fields"
              className="w-full h-auto object-cover rounded"
            />
          </div>
        </div>
        <div className="col-span-1 md:col-span-5">
          <h2 className="text-center text-xl md:text-2xl">Latest release</h2>

          {featureVideo && <VideoCard video={featureVideo} />}
        </div>
      </div>
      <div>
        {videos.length > 0 && (
          <div className="m-8 md:m-40">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
