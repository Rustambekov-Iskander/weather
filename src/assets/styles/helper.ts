import styled from 'styled-components'
import { theme } from './theme'

// flex div
interface FlexProps {
  direction?: string
  justify?: string
  align?: string
  margin?: string
  padding?: string
  width?: string
  wrap?: string
}
export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-wrap: ${(props: any) => props.wrap || 'no-wrap'};
  flex-direction: ${(props: any) => props.direction || 'row'};
  justify-content: ${(props: any) => props.justify || 'stretch'};
  align-items: ${(props: any) => props.align || 'stretch'};
  margin: ${(props: any) => props.margin || '0'};
  padding: ${(props: any) => props.padding || '0'};
  width: ${(props: any) => props.width || 'auto'};
`

//container
export const Container = styled.div`
  width: 100%;
  max-width: ${theme.breakpoints.xxl}px;
  padding: 0 20px;
  margin: 0 auto;
`