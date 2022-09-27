import React from 'react'
import type { NextPage } from 'next'
import styled from 'styled-components'
import { Container } from '../assets/styles/helper'
import { Button, TextField, Typography } from '@mui/material'
import { useInput } from '../hooks/useInput'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  const { value, setValue, onChange } = useInput('Бишкек')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/weather?city=${value}`)
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <label>
          <Typography sx={{ textAlign: 'center' }}>Введите город</Typography>
          <TextField value={value} onChange={onChange}/>
        </label>
        <Button type={'submit'} sx={{ color: 'white' }}>Weather</Button>
      </Form>
    </Container>
  )
}

const Form = styled.form`
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
