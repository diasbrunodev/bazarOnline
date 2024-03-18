import { DivImage, HeaderBar } from './styles'

import logo from '../../images/logo_tropinha_oficial_site.png'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <HeaderBar>
        <DivImage>
          <Link to="/cadastro">
            <img src={logo} alt="Logo Bazar online" />
          </Link>
        </DivImage>

        <Link to="/">
          <div className="titulo">Bazar Tropinha</div>
        </Link>

        {/* <div><button>Carrinho</button></div> */}
      </HeaderBar>
    </>
  )
}
