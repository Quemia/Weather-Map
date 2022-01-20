import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CardTemp = () => {
  return (
    <Box
      sx={{
        mx: "auto",
        py: 1,
        px: 2,
        width: 400,
        height: 330,
        backgroundColor: "#042d54",
        borderRadius: 3,
      }}
    >
      <Typography sx={{ fontSize: 20, my: 1 }} color="#fff" gutterBottom>
        Timon, Maranhão
      </Typography>
      <Typography variant="h2" color="#fff" component="div">
        34ºC
      </Typography>
      <Typography sx={{ mt: 1, mb: 2.5 }} color="#ffffffc2">
        Parcialmente ensolarado
      </Typography>
      <Typography variant="body2">
        <Typography sx={{ fontSize: 17 }} color="#ffffffc2" gutterBottom>
          Temperatura atual: x ºC
        </Typography>
        <Typography sx={{ fontSize: 17 }} color="#ffffffc2" gutterBottom>
          Temperatura máxima: x ºC
        </Typography>
        <Typography sx={{ fontSize: 17 }} color="#ffffffc2" gutterBottom>
          Temperatura mínima: x ºC
        </Typography>
        <Typography sx={{ fontSize: 17 }} color="#ffffffc2" gutterBottom>
          Pressão: x hps
        </Typography>
        <Typography sx={{ fontSize: 17 }} color="#ffffffc2" gutterBottom>
          Umidade: x%
        </Typography>
      </Typography>
    </Box>
  );
};

export default CardTemp;
