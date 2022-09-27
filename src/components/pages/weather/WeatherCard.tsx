import React from 'react';
import styled from "styled-components";
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import {Button, IconButton, Typography} from "@mui/material";
import {theme} from "../../../assets/styles/theme";
import Link from "next/link";

const WeatherCard = () => {
  return (
    <Card>
      <CloudOutlinedIcon fontSize={'large'} sx={{ m: 0 }}/>

      <Title>
        <Typography variant={'h4'}>Облачно и местами дожди</Typography>
        <Typography sx={{fontWeight: 300}}>Бишкек</Typography>
      </Title>

      <Temperature>28 °C</Temperature>

      <Link href={'/'}>
        <Button sx={{ display: 'flex', alignItems: "center", color: 'white', fontSize: '10px', p: 0 }}>
          <LocationOnOutlinedIcon/> Сменить город
        </Button>
      </Link>
    </Card>
  );
};


const Card = styled.div`
  display: grid;
  grid-row-gap: 20px;
  justify-content: start;
  justify-items: start;
  
  max-width: 200px;
  width: 100%;
  max-height: 300px;
  padding: 20px;
  
  background: rgb(0, 0, 0, 0.5);
  border-radius: 5px;
  transition: 0.5s !important;
  color: white;

  :hover {
    background: rgb(0, 0, 0, 0.7);
  }
`

const Title = styled.div`
  h4 {
    font-size: 20px;
    ${theme.mqMax("sm")} {
      font-size: 15px;
    }
  }
`

const Temperature = styled(Typography)`
  font-weight: 700;
  font-size: 40px;
  line-height: 0;
  ${theme.mqMax("sm")} {
    font-size: 30px;
  }
`

export default WeatherCard;
