import styled from 'styled-components'
import { colors } from '../../../styles'

export const SectionRegister = styled.section`
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

export const Form = styled.div`
  width: 70%;
  margin: auto;

  display: flex;
  flex-direction: column;
  gap: 15px;

  input {
    height: 40px;
    border-radius: 5px;
    border: none;
    padding: 10px;
  }

  button {
    padding: 8px;
    border: none;
    border-radius: 5px;
    width: 40%;
    background-color: ${colors.green2};
    color: ${colors.white};
    font-size: 14px;
    font-weight: 700;
    margin: 0 auto;
  }

  .button-home {
    display: flex;
    justify-content: center;
  }
`

export const CardImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 80%;
  margin: 20px auto 20px;
  border-radius: 10px;

  background-color: ${colors.white};
  border: 1px solid ${colors.gray};

  img {
    margin-bottom: 10px;
    width: 100%;
    height: 15em;
    object-fit: cover;
  }

  p {
    margin: 0px 0 10px 16px;
  }
`

export const ButtonTrash = styled.div`
  button {
    position: absolute;
    color: ${colors.black};
    background-color: transparent;
    border: none;
  }
`
