import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  console.log(channelDetail, videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,212,255,1) 13%, rgba(0,112,112,1) 82%, rgba(0,115,114,1) 100%)",
            height: "30rem",
            zIndex: 10,
          }}
        />

        <ChannelCard
          channelDetail={channelDetail}
          marginTop="-14rem"
          boxShadow="0 0 1rem 0.5rem #050a0a"
        />
      </Box>

      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "10rem" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetails;
