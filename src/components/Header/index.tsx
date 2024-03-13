import { DivImage, HeaderBar } from './styles'

import logo from '../../images/logo_tropinha_oficial_site.png'

export const Header = () => {
  return (
    <>
      <HeaderBar>
        <DivImage>
          <img src={logo} alt="Logo Bazar online" />
        </DivImage>

        <div>Bazar Tropinha</div>

        {/* <div><button>Carrinho</button></div> */}
      </HeaderBar>
    </>
  )
}
