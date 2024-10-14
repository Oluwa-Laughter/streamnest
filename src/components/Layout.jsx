import NavBar from "./NavBar";
import { Outlet } from "react-router";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box sx={{ background: "#f5f5f5" }}>
      <NavBar />
      <Outlet />
    </Box>
  );
};

export default Layout;
