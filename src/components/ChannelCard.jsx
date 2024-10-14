import { Box, CardContent, CardMedia, Typography } from "@mui/material";

import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop, boxShadow }) => {
  console.log(channelDetail);
  return (
    <Box sx={{ boxShadow: "none", borderRadius: "2rem" }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#f5f5f5",
            width: { xs: "35.6rem", md: "32rem" },
            height: "35.6rem",
            margin: "auto",
            marginTop,
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "18rem",
              width: "18rem",
              mb: 2,
              border: "5px solid #1fb4b4",
              boxShadow,
            }}
          />

          <Typography
            variant="h6"
            color="#007070"
            fontSize="2.6rem"
            fontWeight="bold"
            textAlign="center"
          >
            {channelDetail?.snippet?.title}
            <CheckCircle
              sx={{ fontSize: 14, color: "#007070", ml: "0.5rem" }}
            />
          </Typography>

          {channelDetail?.statistics?.subscriberCount && (
            <Typography variant="subtitle1" color="#000" fontSize="1.4rem">
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
