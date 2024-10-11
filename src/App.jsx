import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  NavBar,
  Feed,
  SearchFeed,
  VideoDetails,
  ChannelDetails,
} from "./components";

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ background: "#f5f5f5" }}>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:id" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
