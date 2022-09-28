import React from 'react'
import type { NextPage } from 'next'
import styled from 'styled-components'
import { Container } from '../assets/styles/helper'
import { Button, TextField, Typography } from '@mui/material'
import { useInput } from '../hooks/useInput'
import { useRouter } from 'next/router'
import {motion} from "framer-motion";
import {sideAnimation} from "../components/animations/sideAnimation";
import Head from "next/Head";

const formAnimation = sideAnimation('x');

const Home: NextPage = () => {
  const router = useRouter()
  const { value, setValue, onChange } = useInput('Бишкек')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/weather?city=${value}`)
  }

  return (
    <>
      <Head>
        <title>Прогноз погоды</title>
        <meta name={'description'} content={'прогноз погоды любого города'} />
      </Head>
    <Container>
      <Form variants={formAnimation} initial={'hidden'} animate={'visible'} onSubmit={onSubmit}>
        <label>
          <Typography sx={{ textAlign: 'center' }}>Введите город</Typography>
          <TextField value={value} onChange={onChange}/>
        </label>
        <Button type={'submit'} sx={{ color: 'white' }}>Weather</Button>
      </Form>
    </Container>
      </>
  )
}

const Form = styled(motion.form)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
 * {
   color: white !important;
 }
`

export default Home
