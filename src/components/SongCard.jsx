// SongCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  // Correct path to cover art, handle URL template if necessary
  let coverArt = song.attributes?.artwork?.url || 'path/to/default/image.jpg';

  if (coverArt.includes('{w}') && coverArt.includes('{h}')) {
    coverArt = coverArt.replace('{w}', '300').replace('{h}', '300');
  }

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 ${
            activeSong?.title === song.attributes?.name
              ? 'flex bg-opacity-70'
              : 'hidden'
          } group-hover:flex`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>

        <img alt={`Cover art for ${song.attributes?.name}`} src={coverArt} />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.id}`}>
          {song.attributes.albumName}</Link>
        </p>

        <p className="text-sm truncate text-gray-300 mt-1">
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : '/top-artists'
            }
          >
            {song.attributes.artistName}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
