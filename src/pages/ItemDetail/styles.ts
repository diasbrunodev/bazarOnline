import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const DetailSection = styled.section`
  padding: 10px;

  @media (min-width: ${breakpoints.tablet}) {
    width: 50%;
    margin: auto;
  }
`

export const CardDetailSection = styled.section`
  border: 1px solid;
  border-color: ${colors.gray};
  border-radius: 10px;
  width: 90%;
  margin: 20px auto 0;
  padding-bottom: 20px;

  background-color: ${colors.white};

  img {
    width: 100%;
    height: 30em;
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

export const Contact = styled.a`
  background-color: ${colors.green};
  color: ${colors.white};
  padding: 10px;
  width: 80%;
  margin: auto;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  button {
    padding: 10px;
    background-color: ${colors.white};
    border-radius: 6px;
    border: none;
    color: ${colors.green};
  }
`
