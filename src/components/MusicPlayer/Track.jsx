import React from "react";

const Track = ({ isPlaying, isActive, activeSong }) => {
  // Declare the variable inside the component
  let coverArt =
    activeSong.attributes?.artwork?.url || "path/to/default/image.jpg";

  if (coverArt.includes("{w}") && coverArt.includes("{h}")) {
    coverArt = coverArt.replace("{w}", "300").replace("{h}", "300");
  }

  return (
    <div className="flex-1 flex items-center justify-start">
      <div
        className={`${
          isPlaying && isActive ? "animate-[spin_3s_linear_infinite]" : ""
        } hidden sm:block h-16 w-16 mr-4`}
      >
        
        <img src={coverArt} alt="cover art" className="rounded-full" />
      </div>
      <div className="w-[50%]">
        <p className="truncate text-white font-bold text-lg">
          {activeSong?.attributes?.albumName? activeSong.attributes.albumName
            : "No active Song"}
        </p>
        <p className="truncate text-gray-300">
          {activeSong.attributes.artistName ? activeSong.attributes.artistName : "No active Song"}
        </p>
      </div>
    </div>
  );
};

export default Track;
