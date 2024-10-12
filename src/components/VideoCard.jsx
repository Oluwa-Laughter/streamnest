import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoChannelUrl,
  demoChannelTitle,
  demoVideoTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "100%", md: "33rem" },
        maxWidth: "33rem",
        borderRadius: "9px",
        border: "5px",
        boxShadow: "none",
        padding: 0,
        margin: 0,
        overflow: "hidden",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: "33rem", height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#0a2d2d", height: "10.6rem" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#fff"
            noWrap
            margin={0}
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              lineHeight: "1.2em",
              height: "2.4em",
            }}
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="#c6c1c1">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle
              sx={{ fontSize: 14, color: "#c6c1c1", ml: "0.5rem" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
