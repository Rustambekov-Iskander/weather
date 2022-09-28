import React from 'react';
import styled from "styled-components";
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import {Button, IconButton, Typography} from "@mui/material";
import {theme} from "../../../assets/styles/theme";
import Link from "next/link";
import {motion} from "framer-motion";
import {sideAnimation} from "../../animations/sideAnimation";
import {IWeatherForComponent} from "../../../@types/weather";
import type {NextPage} from "next";

const cardAnimation = sideAnimation('x')


const WeatherCard: NextPage<IWeatherForComponent> = ({weather}) => {
  return (
    <Card initial={'hidden'} animate={'visible'} variants={cardAnimation}>

      <picture>
        <source srcSet={`${process.env.NEXT_PUBLIC_API_ICONS}/${weather.weather[0].icon}.png`} type="image/webp" />
        <img src={`${process.env.NEXT_PUBLIC_API_ICONS}/${weather.weather[0].icon}.png`} alt={'icon'}/>
      </picture>

      <Title>
        <Typography variant={'h4'}>{weather.weather[0].description}</Typography>
        <Typography sx={{fontWeight: 300}}>{weather.name}</Typography>
      </Title>

      <Temperature>{Math.round(weather.main.temp - 273.15)} °C</Temperature>

      <Link href={'/'}>
        <Button sx={{ display: 'flex', alignItems: "center", color: 'white', fontSize: '10px', p: 0 }}>
          <LocationOnOutlinedIcon/> Сменить город
        </Button>
      </Link>
    </Card>
  );
};


const Card = styled(motion.div)`
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
