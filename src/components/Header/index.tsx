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

        <div>Bazar Tropinha</div>

        {/* <div><button>Carrinho</button></div> */}
      </HeaderBar>
    </>
  )
}
