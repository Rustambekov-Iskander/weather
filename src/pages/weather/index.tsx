import React from 'react'
import WeatherCard from '../../components/pages/weather/WeatherCard'
import styled from 'styled-components'
import bg from '../../assets/img/cloudy.jpeg'
import SideBar from '../../components/pages/weather/SideBar'
import { Flex } from '../../assets/styles/helper'
import Slider from '../../components/pages/weather/Slider'
import { wrapper } from '../../redux/store'
import { fetchWeather } from '../../redux/reducers/weather'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

const Index = () => {
  // const dispatch = useAppDispatch()
  // const {weather} = useAppSelector(state => state.weatherReducer)
  //
  // React.useEffect(() => {
  //   dispatch(fetchWeather())
  // }, [])
  // console.log(weather)

  return (
    <Wrapper>
      <Flex justify={'space-between'} margin={'0 0 40px'}>
        <WeatherCard />
        <SideBar />
      </Flex>
      <Slider />
    </Wrapper>
  )
}

// Index.getInitialProps = wrapper.getInitialPageProps(({ dispatch }) => async () => {
//   await dispatch(fetchWeather('Bishkek'))
// })

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 100vw;
  min-height: 100vh;
  height: 100%;
  padding: 20px;

  background-image: url(${bg.src});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`

export default Index
