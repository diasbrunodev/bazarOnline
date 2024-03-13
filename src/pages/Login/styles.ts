import styled from 'styled-components'
import { colors } from '../../styles'

export const SectionLogin = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  min-height: 100vh;

  background-color: ${colors.green};

  .login {
    font-family: 'Dancing Script', cursive;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
    font-size: 4em;

    color: ${colors.white};
  }
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  button {
    padding: 8px;
    margin-top: 20px;
    border: none;
    border-radius: 8px;
    width: 70%;
    background-color: ${colors.green2};
    color: ${colors.white};
    font-size: 20px;
    font-weight: 700;
  }
`
