import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HomeSection = styled.section`
  background-color: ${colors.green};
  padding-bottom: 20px;

  @media (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding: 20px;
  }
`

export const CardSection = styled.section`
  border: 1px solid;
  border-color: ${colors.gray};
  border-radius: 10px;
  width: 90%;
  margin: 20px auto 0;

  background-color: ${colors.white};

  @media (min-width: ${breakpoints.tablet}) {
    width: 80%;
  }

  img {
    width: 100%;
    height: 12em;
    object-fit: cover;
  }
`

export const Informations = styled.div`
  font-family: sans-serif;
  color: ${colors.black};

  .titulo {
    font-size: 20px;
    margin: 10px 0 10px 10px;
  }

  p {
    font-size: 16px;
    margin: 0 0 10px 10px;
  }
`
