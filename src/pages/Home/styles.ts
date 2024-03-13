import styled from 'styled-components'
import { colors } from '../../styles'

export const HomeSection = styled.section`
  background-color: ${colors.green};
  padding-bottom: 20px;
`

export const CardSection = styled.section`
  border: 1px solid;
  border-color: ${colors.gray};
  border-radius: 10px;
  width: 90%;
  margin: 20px auto 0;

  background-color: ${colors.white};

  img {
    width: 100%;
    height: 15em;
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
