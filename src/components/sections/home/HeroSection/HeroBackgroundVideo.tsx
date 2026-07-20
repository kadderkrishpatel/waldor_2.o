"use client";
import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

interface HeroBackgroundVideoProps {
  src: string;
  poster?: string;
}

export default function HeroBackgroundVideo({
  src,
  poster,
}: HeroBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="absolute inset-0 group"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-none object-left"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {showControls && (
        <button
          type="button"
          onClick={toggleVideo}
          className="absolute right-8 bottom-8 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white transition hover:bg-white/40"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause size={22} /> : <Play size={22} />}
        </button>
      )}
    </div>
  );
}
