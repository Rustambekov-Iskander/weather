import React from 'react';
import styled from "styled-components";

import {Typography} from "@mui/material";
import type {NextPage} from "next";
import {theme} from "../../../assets/styles/theme";

interface sliderCardProps {
  time: string;
  temp: number;
  desc: string;
}

const SliderCard:NextPage<sliderCardProps> = ({ time, temp, desc}) => {
  return (
    <Card>
      <Typography sx={{fontWeight: 300}}>{time}</Typography>

      <Title>
        <Typography variant={'h4'}>{desc}</Typography>
      </Title>
      <Typography sx={{ fontWeight: 700, fontSize: '30px' }}>{temp} °C</Typography>
    </Card>
  );
};


const Card = styled.div`
  display: grid;
  grid-row-gap: 20px;
  justify-content: start;
  max-width: 200px;
  width: 100%;
  max-height: 300px;
  padding: 20px;
  box-shadow: 0 0 20px black;
  border-radius: 5px;
  transition: 0.5s !important;
  color: white;

  :hover {
    background: rgb(0, 0, 0, 0.5);
    box-shadow: none;
  }
`

const Title = styled.div`
  h4 {
    font-size: 15px;
  }
`

export default SliderCard;
