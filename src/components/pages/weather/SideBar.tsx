import React from 'react'
import styled from 'styled-components'
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined'
import StormOutlinedIcon from '@mui/icons-material/StormOutlined';
import GrainOutlinedIcon from '@mui/icons-material/GrainOutlined';
import WindPowerOutlinedIcon from '@mui/icons-material/WindPowerOutlined';

import { Typography } from '@mui/material'
import {theme} from "../../../assets/styles/theme";

const SideBar = () => {
  return (
    <List>
      <Row>
        <WaterOutlinedIcon fontSize={'large'} sx={{ gridArea: 'icon' }} />
        <Title>Влажность</Title>
        <Desc>50%</Desc>
      </Row>
      <Row>
        <StormOutlinedIcon fontSize={'large'} sx={{ gridArea: 'icon' }} />
        <Title>давление воздуха</Title>
        <Desc>1009.09PS</Desc>
      </Row>
      <Row>
        <GrainOutlinedIcon fontSize={'large'} sx={{ gridArea: 'icon' }} />
        <Title>вероятность дождя</Title>
        <Desc>0%</Desc>
      </Row>
      <Row>
        <WindPowerOutlinedIcon fontSize={'large'} sx={{ gridArea: 'icon' }} />
        <Title>скорость воздуха</Title>
        <Desc>1.4 км/ч</Desc>
      </Row>
    </List>
  )
}

const List = styled.menu`
  margin: 0;
  display: grid;
  align-content: start;
  justify-items: end;
  grid-row-gap: 10px;
`

const Row = styled.li`
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
