import styled from 'styled-components'
import { Box } from '../Box'

export const Background = styled(Box)`
  background-size: 1.73em 1.73em;
}
`

export const Wrap = styled.header`
  color: var(--color-haze);
  position: relative;
  z-index: 1;

  h1 {
    margin-top: 0;
    font-size: 1.7em;
  }

  h4 {
    margin-top: 0;
    margin-bottom: 2.2em;
  }

  @media (min-width: 576px) {
    grid-column: 1/7;
  }

  @media (min-width: 769px) {
    grid-column: 2/11;
  }
`