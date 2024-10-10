import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={3}
      sx={{
        position: "sticky",
        top: 0,
        background: "#f5f5f5",
        justifyContent: "space-between",
      }}
    >
      <Link to="/home">
        <img src="/images/streamnest-Logo.png" alt="logo" className="logo" />
      </Link>

      <SearchBar />
    </Stack>
  );
};

export default NavBar;
