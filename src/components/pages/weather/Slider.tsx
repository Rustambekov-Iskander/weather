import React, { useEffect, useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { A11y, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import SliderCard from './SliderCard'
import styled from 'styled-components'
import { IconButton, useMediaQuery } from '@mui/material'
import { theme } from '../../../assets/styles/theme'
import { motion } from 'framer-motion'
import { sideAnimation } from '../../animations/sideAnimation'
import { sliderItems } from '../../../services/constants'
import type {NextPage} from "next";
import {IWeatherForComponent} from "../../../@types/weather";

const sliderAnimation = sideAnimation('y')

const Slider:NextPage<IWeatherForComponent> = ({weather}) => {
  const [slideView, setSlideView] = useState(3)
  const screenWidthSM = useMediaQuery(theme.mqMax('sm'))
  const screenWidthMD = useMediaQuery(theme.mqMax('lg'))
  const screenWidthLG = useMediaQuery(theme.mq('lg'))

  useEffect(() => {
    if (screenWidthLG) {
      setSlideView(5)
    }
    if (screenWidthMD) {
      setSlideView(3)
    }
    if (screenWidthSM) {
      setSlideView(2)
    }
  }, [screenWidthLG, screenWidthMD, screenWidthSM])

  return (
    <Main initial={'hidden'} animate={'visible'} variants={sliderAnimation}>
      <SliderMain
        modules={[A11y, Navigation]}
        navigation={{ nextEl: '#swiper-next', prevEl: '#swiper-prev' }}
        spaceBetween={40}
        slidesPerView={slideView}
      >
        {sliderItems.map(({temp, id, time}) => (
          <SwiperSlide key={id}>
            <SliderCard time={time} temp={temp} desc={weather.weather[0].description}/>
          </SwiperSlide>
        ))}
      </SliderMain>
      <Buttons>
        <IconButton sx={{ color: 'white' }} id="swiper-prev">
          <KeyboardArrowLeftIcon />
        </IconButton>
        <IconButton sx={{ color: 'white' }} id="swiper-next">
          <KeyboardArrowRightIcon />
        </IconButton>
      </Buttons>
    </Main>
  )
}

const Main = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const SliderMain = styled(Swiper)`
  padding: 20px;
  max-width: 900px;
  margin: 0;
`
const Buttons = styled.div`
  justify-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0;

  button {
    border: 1px solid;
    padding: 5px;
    margin: 0 4px;
    background: rgb(245, 255, 250, 0.1);
  }
`

export default Slider
