import React from "react";
import CardTemp from "./components/cards/card";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{
              my: 2,
              flexGrow: 1,
              textAlign: "center",
              fontFamily: "Outfit",
            }}
            color="#042d54"
          >
            Clima nas suas coordenadas:
          </Typography>
        </Toolbar>
      </Box>
      <CardTemp />
    </Container>
  );
}

export default App;
