import VideoPlayer from "./VideoPlayer";

export default function VideoCard({ video }) {
  const { title, video_id } = video;

  return (
    <div>
      <h3 className="font-semibold text-2xl pt-9 pb-3">{title}</h3>
      <VideoPlayer videoID={video_id} />
    </div>
  );
}
