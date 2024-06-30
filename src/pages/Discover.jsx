import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { genres } from '../assets/constants';
import { useGetTopChartQuery } from '../redux/services/shazamCore';


const Discover = () => {
    const dispatch = useDispatch();
    const { activeSong,isPlaying } = useSelector((state) => state.player);
    
    const { data, isFetching, error } = useGetTopChartQuery();
    const genreTitle = 'pop';

    if (isFetching) return <Loader title="Loading songs..." />;
    if (error) return <Error />;

    console.log(data); // Inspect the structure of `data`

    // Adjust based on the actual structure of `data`
    const songs = Array.isArray(data) ? data : data?.data || [];
    

    if (!Array.isArray(songs)) {
        return <Error message="Unexpected data format" />;
    }

    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">
                    Discover {genreTitle}
                </h2>
                <select
                    onChange={() => {}}
                    value=""
                    className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
                >
                    {genres.map((genre) => (
                        <option key={genre.value} value={genre.value}>
                          {genre.title}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-wrap sm:justify-start justify-center gap-8 text-white">
                {songs.map((song, i) => (
                    <SongCard
                        key={song.key} // Assuming each song has a unique `id` property
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={i}
                    />
                ))}
            </div>
        </div>
    );
};

export default Discover;
