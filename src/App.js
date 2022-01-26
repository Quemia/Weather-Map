import React, { useState, useEffect } from "react";
import CardTemp from "./components/cards/card";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import axios from "axios";

function App() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  let getWeather = async (lat, long) => {
    let res = await axios.get(
      "http://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat: lat,
          lon: long,
          appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
          lang: "pt",
          units: "metric",
        },
      }
    );
    setWeather(res.data);
    console.log(res);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  if (location === false) {
    return (
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
        Você precisa habilitar a localização no browser
      </Typography>
    );
  } else if (weather === false) {
    return (
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
        Carregando o clima...
      </Typography>
    );
  } else {
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
        <CardTemp weather={weather} />
      </Container>
    );
  }
}

export default App;
