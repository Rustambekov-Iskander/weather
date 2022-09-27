import { createTheme } from '@mui/material'

// mui
export const themeMui = createTheme({
  palette: {}
})

// styled components
const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}

const mq = (breakpoint: TBreakpoints) => `@media (min-width: ${breakpoints[breakpoint]}px)`

const mqMax = (breakpoint: TBreakpoints) => `@media (max-width: ${breakpoints[breakpoint] - 0.0001}px)`

export const theme = {
  mq,
  mqMax,
  breakpoints,
  colors: {
    gray: '#555252',
    yellow: '#FDDB16',
    green: '#27AE60',
    lightGreen: '#17FF0026'
  }
}

type TBreakpoints = keyof typeof breakpoints
