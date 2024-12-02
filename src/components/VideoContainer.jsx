import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function VideoContainer({ video, className }) {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    if (video) {
      // eslint-disable-next-line react/prop-types
      setVideoUrl(video.videoFile);
    }
  }, [video]);
  return (
    <div className={`${className} w-full h-full flex flex-wrap items-center justify-center text-white `}>
      <div className="w-full h-full flex flex-wrap items-center justify-center ">
        <iframe
          src={videoUrl}
          width="640"
          height="360"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          style={{ height: "auto", width: "100%", aspectRatio: "640 / 360" }}
          allowFullScreen
          className="bg-white"
        ></iframe>
      </div>
      
    </div>
  );
}

export default VideoContainer;