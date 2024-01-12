import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CardTemp = ({ weather }) => {
  return (
    <Box
      sx={{
        mx: "auto",
        py: 1,
        px: 2,
        width: "40%",
        padding: "16px 0 16px 20px",
        backgroundColor: "#042d54",
        borderRadius: 3,
        "@media screen and (max-width:580px)": {
          width: "80%",
        },
      }}
    >
      <Typography
        sx={{
          flexGrow: 1,
          fontFamily: "Outfit",
          fontSize: 20,
          my: 1,
        }}
        color="#fff"
        gutterBottom
      >
        {weather["name"]}, {weather["sys"]["country"]}
      </Typography>
      <Typography
        sx={{
          flexGrow: 1,
          fontFamily: "Outfit",
        }}
        variant="h2"
        color="#fff"
        component="div"
      >
        {weather["main"]["temp"]}ºC
      </Typography>
      <Typography
        sx={{ mt: 1, mb: 2.5, fontWeight: "semi-bold" }}
        color="#ffffffc2"
      >
        {weather["weather"][0]["description"]}
      </Typography>
      <Typography variant="body2">
        <Typography sx={{ fontSize: 17 }} color="#ffffffc2" gutterBottom>
          Sensação Térmica: {weather["main"]["feels_like"]} ºC
        </Typography>
        <Typography sx={{ fontSize: 17 }} color="#ffffffc2" gutterBottom>
          Temperatura máxima: {weather["main"]["temp_max"]} ºC
        </Typography>
        <Typography sx={{ fontSize: 17 }} color="#ffffffc2" gutterBottom>
          Temperatura mínima: {weather["main"]["temp_min"]} ºC
        </Typography>
        <Typography sx={{ fontSize: 17 }} color="#ffffffc2" gutterBottom>
          Pressão: {weather["main"]["pressure"]} hpa
        </Typography>
        <Typography sx={{ fontSize: 17 }} color="#ffffffc2" gutterBottom>
          Umidade: {weather["main"]["humidity"]} %
        </Typography>
      </Typography>
    </Box>
  );
};

export default CardTemp;
