import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";

const SignInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      navigate("/feed");
    } else {
      // Display error message
      alert("Passwords do not match");
    }
  };

  return (
    <Box
      sx={{
        display: "grid",
        height: { xs: "auto", md: "100vh" },
        width: "100%",
        maxWidth: "120rem",
        margin: "0 auto",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        alignItems: "center",
        gap: "5rem",
        padding: "2rem",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <img
          src="/images/streamnest.png"
          alt="hero-image"
          className="streamNest"
          style={{
            maxWidth: "100%",
            height: "auto",
            width: { xs: "70%", sm: "80%", md: "100%" },
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          width: "100%",
          maxWidth: "55rem",
          padding: "1.4rem",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          fontWeight="bold"
          fontSize="3.6rem"
          textAlign="center"
          alignSelf="center"
        >
          Welcome back to <span style={{ color: "#075656" }}>StreamNest</span>
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          fontSize="2rem"
          sx={{ color: "#075656" }}
        >
          Sign In
        </Typography>
        <form
          onSubmit={handleSignIn}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            width: "100%",
            maxWidth: "40rem",
          }}
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoFocus
            style={{
              width: "100%",
              height: "5rem",
              padding: "1rem 1.4rem",
              fontSize: "1.6rem",
              borderRadius: "0.9rem",
              border: "1px solid #007070",
              outline: "none",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              height: "5rem",
              padding: "1rem 1.4rem",
              fontSize: "1.6rem",
              borderRadius: "0.9rem",
              border: "1px solid #007070",
              outline: "none",
            }}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{
              width: "100%",
              height: "5rem",
              padding: "1rem 1.4rem",
              fontSize: "1.6rem",
              borderRadius: "0.9rem",
              border: "1px solid #007070",
              outline: "none",
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#007372",
              color: "#fff",
              padding: "0.75rem 2rem",
              fontSize: "1.4rem",
              borderRadius: "0.5rem",
              "&:hover": {
                backgroundColor: "#005f5f",
              },
            }}
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default SignInPage;
