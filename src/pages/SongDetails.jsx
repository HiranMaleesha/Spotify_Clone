import { useParams } from "react-router-dom";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";

const SongDetails = () => {
  const { songid } = useParams();
  const { data: songdata, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({songid});

  console.log("songdata:",songdata);
  console.log("songid:",songid);

  return <div>SongDetails
    <div>{songid}</div>
  </div>
};

export default SongDetails;