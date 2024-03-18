import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HeaderBar = styled.header`
  border-bottom: 1px solid;
  border-color: ${colors.gray};
  border-radius: 0 0 10px 10px;
  background-color: ${colors.white};
  color: ${colors.green};

  padding: 20px;

  font-family: 'Dancing Script', cursive;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
  font-size: 1.9em;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .titulo {
    color: ${colors.green};
  }

  @media (min-width: ${breakpoints.tablet}) {
    align-items: end;
  }

  .titulo {
    @media (min-width: ${breakpoints.tablet}) {
      font-size: 2em;
    }
  }
`

export const DivImage = styled.div`
  width: 30%;

  img {
    width: 100%;

    @media (min-width: ${breakpoints.tablet}) {
      width: 50%;
    }
  }
`
