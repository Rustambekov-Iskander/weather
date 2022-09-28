import React from 'react'
import styled from 'styled-components'
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined'
import StormOutlinedIcon from '@mui/icons-material/StormOutlined';
import GrainOutlinedIcon from '@mui/icons-material/GrainOutlined';
import WindPowerOutlinedIcon from '@mui/icons-material/WindPowerOutlined';

import { Typography } from '@mui/material'
import {theme} from "../../../assets/styles/theme";
import {motion} from "framer-motion";
import type {NextPage} from "next";
import {IWeatherForComponent} from "../../../@types/weather";


const groupAnimation = {
  initial: {
    opacity: 0,
    x: 20
  },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {delay: custom * .1}
  })
}

const SideBar: NextPage<IWeatherForComponent> = ({weather}) => {
  return (
    <List initial={"initial"} animate={"visible"}>
      <Row variants={groupAnimation} custom={1}>
        <WaterOutlinedIcon fontSize={'large'} sx={{ gridArea: 'icon' }} />
        <Title>Влажность</Title>
        <Desc>{weather.main.humidity}%</Desc>
      </Row>
      <Row variants={groupAnimation} custom={2}>
        <StormOutlinedIcon fontSize={'large'} sx={{ gridArea: 'icon' }} />
        <Title>давление воздуха</Title>
        <Desc>{weather.main.pressure} PS</Desc>
      </Row>
      <Row variants={groupAnimation} custom={3}>
        <GrainOutlinedIcon fontSize={'large'} sx={{ gridArea: 'icon' }} />
        <Title>вероятность дождя</Title>
        <Desc>15%</Desc>
      </Row>
      <Row variants={groupAnimation} custom={4}>
        <WindPowerOutlinedIcon fontSize={'large'} sx={{ gridArea: 'icon' }} />
        <Title>скорость воздуха</Title>
        <Desc>{weather.wind.speed} км/ч</Desc>
      </Row>
    </List>
  )
}

const List = styled(motion.menu)`
  margin: 0;
  display: grid;
  align-content: start;
  justify-items: end;
  grid-row-gap: 10px;
`

const Row = styled(motion.li)`
  display: grid;
  grid-template-areas:
    'icon title'
    'icon desc';
  grid-column-gap: 10px;
  padding: 10px;
  background: rgb(0, 0, 0, 0.5);
  transition: 0.5s !important;
  color: #f5fffa;

  :hover {
    background: rgb(0, 0, 0, 0.7);
  }
`

const Title = styled(Typography)`
  grid-area: title;
  font-weight: 300;
`

const Desc = styled(Typography)`
  grid-area: desc;
  color: white;
  font-weight: 700;
  font-size: 30px;
  
  ${theme.mqMax("sm")} {
    font-size: 20px;
  }
`

export default SideBar
