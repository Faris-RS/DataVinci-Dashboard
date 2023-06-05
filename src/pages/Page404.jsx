import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Page404() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <img
                  src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                  alt=""
                  width={500}
                  height={250}
                />
              </Grid>
              <Grid item>
                <Button variant="contained" className="bg-blue-500" onClick={()=>navigate("/dashboard")}>
                  Back Home
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
