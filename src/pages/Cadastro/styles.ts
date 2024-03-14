import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { InputField } from '../../components/Input/styles'

export const SectionRegister = styled.section`
  background-color: ${colors.green};
  padding: 10px;
`

export const Titulo = styled.div`
  padding: 20px;
  text-align: center;

  font-family: 'Dancing Script', cursive;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
  font-size: 4em;

  color: ${colors.white};
`

export const SentFile = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  border: none;
  padding: 10px;
  margin: auto;

  width: 30%;
  height: 80px;
  margin-bottom: 20px;

  @media (min-width: ${breakpoints.tablet}) {
    width: 10%;
  }

  .upload {
    position: absolute;
  }

  .divInput {
    opacity: 0;
  }
`

export const Form = styled.form`
  width: 70%;
  margin: auto;

  @media (min-width: ${breakpoints.tablet}) {
    width: 30%;
  }

  ${InputField} {
    margin-bottom: 10px;
    border-radius: 5px;
  }

  .button {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 700;
    width: 40%;
  }

  .button-green {
    text-align: center;
    margin-bottom: 20px;

    button {
      background-color: ${colors.green2};
      color: ${colors.white};
    }
  }
`

export const CardImage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`

export const ButtonTrash = styled.div`
  button {
    position: absolute;
    color: ${colors.black};
    background-color: transparent;
    border: none;
  }
`
