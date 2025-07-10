import VideoPlayer from "./VideoPlayer";

export default function VideoCard({ video }) {
  const { title, video_id, thumbnail_url } = video;

  return (
    <div>
      <h3 className="font-semibold pt-9 pb-3 text-center">{title}</h3>
      <VideoPlayer videoId={video_id} />
    </div>
  );
}
