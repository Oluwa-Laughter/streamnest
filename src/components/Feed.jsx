import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "./";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);
  return (
    <>
      <Stack
        sx={{
          flexDirection: { sx: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            borderRight: "1px solid #007372",
            px: { sx: 0, md: 2 },
          }}
        >
          <SideBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </Box>

        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "#000" }}
          >
            {selectedCategory} <span style={{ color: "#007070" }}>Videos</span>
          </Typography>

          <Videos videos={videos} />
        </Box>
      </Stack>

      <Typography
        className="copyright"
        variant="body2"
        sx={{
          mt: 1.5,
          fontSize: "1.4rem",
          color: "#007070",
          textAlign: "center",
        }}
      >
        Copyright {new Date().getFullYear()} Stream Nest
      </Typography>
    </>
  );
};

export default Feed;
