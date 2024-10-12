import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  SignInPage,
  Feed,
  SearchFeed,
  VideoDetails,
  ChannelDetails,
} from "./components";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ background: "#f5f5f5" }}>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route element={<Layout />}>
            <Route path="/feed" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetails />} />
            <Route path="/channel/:id" element={<ChannelDetails />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
