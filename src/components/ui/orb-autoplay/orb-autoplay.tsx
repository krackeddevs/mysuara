"use client";
import { useRef, useEffect } from "react";

export default function OrbAutoPlay() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = () => {
      videoRef.current?.play().catch(() => {});
      document.removeEventListener("touchstart", playVideo);
    };
    document.addEventListener("touchstart", playVideo);
    return () => document.removeEventListener("touchstart", playVideo);
  }, []);

  return (
    <video
      ref={videoRef}
      src="https://www.apple.com/105/media/us/siri/2018/ee7c4c16_aae5_4678_9cdd_7ca813baf929/films/siri_orb_large.mp4"
      muted
      loop
      autoPlay
      playsInline
      preload="auto"
      className="pointer-events-none absolute h-auto w-[116%] max-w-none rounded-full mix-blend-screen opacity-95 filter saturate-[1.4] contrast-[1.1] brightness-[1.1]"
    />
  );
}
