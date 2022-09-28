import React from 'react'
import WeatherCard from '../../components/pages/weather/WeatherCard'
import styled from 'styled-components'
import bg from '../../assets/img/cloudy.jpeg'
import SideBar from '../../components/pages/weather/SideBar'
import { Flex } from '../../assets/styles/helper'
import Slider from '../../components/pages/weather/Slider'
import { wrapper } from '../../redux/store'
import { fetchWeather } from '../../redux/reducers/weather'
import { useAppSelector } from '../../hooks/redux'
import { Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Index = () => {
  const {query: { city }} = useRouter()
  const { weather } = useAppSelector(state => state.weatherReducer)


 if (weather.length <= 0) {
    return (
      <Flex direction={'column'} align={'center'} justify={'center'} margin={'40vh 0 0'}>
        <Typography>По запросу `&quot;`{city}`&quot;` ничего не найдено</Typography>
        <Link href={'/'}>
          <Button sx={{ color: 'white' }}>Вернутся назад</Button>
        </Link>
      </Flex>
    )
  }
  return (
    <Wrapper>
      <Flex justify={'space-between'} margin={'0 0 40px'}>
        <WeatherCard weather={weather}/>
        <SideBar weather={weather}/>
      </Flex>
      <Slider weather={weather}/>
    </Wrapper>
  )
}

Index.getInitialProps = wrapper.getInitialPageProps(({ dispatch }) => async ({ query }) => {
  const { city } = query
  await dispatch(fetchWeather(`${city}`))
})

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 100vw;
  min-height: 100vh;
  height: 100%;
  padding: 20px;
`

export default Index
