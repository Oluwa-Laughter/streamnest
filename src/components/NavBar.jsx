import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p="2rem"
      sx={{
        position: "sticky",
        background: "#f5f5f5",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/">
        <img src="/images/streamnest-Logo.png" alt="logo" className="logo" />
      </Link>

      <SearchBar />
    </Stack>
  );
};

export default NavBar;
