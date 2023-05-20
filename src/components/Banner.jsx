import React from "react";

const Banner = () => {
  return (
    <div className="relative flex justify-center items-center m-0 w-full">
        <h1>banner</h1>
    <video
      src="banner-video.mp4" // Replace with the path to your video file
      autoPlay
      loop
      muted
      className="w-full h-auto "
    />
  </div>
);
};
export default Banner;
