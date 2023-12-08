import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const userDetails = {
    email: "",
    password: "",
  };

  const [user, setUser] = React.useState(userDetails);
    const navigate = useNavigate();

  const handleLogin = (e) => {
   const response= fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
        },
        });

        if(response.ok){
            navigate("/homepage")
        }

    console.log(user);
  };

  return (
    <Stack style={{ background: "#e4e4e4", height: "100vh", width: "100%" }}>
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        flexDirection={"row"}
      >
        <Stack justifyContent={"center"}>
          <Typography fontSize={"17px"} style={{ fontSize: "32px" }}>
            Login Here
          </Typography>
        </Stack>
        <Grid
          container
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          flexDirection={"column"}
        >
          <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
            <TextField
              value={user.email}
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
            <TextField
              value={user.password}
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
            <Button variant="contained" fullWidth onClick={handleLogin}>
              Login
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Login;
