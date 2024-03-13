import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import { Section } from './styles'

export const Layout = () => {
  return (
    <>
      <Section>
        <Header />
        <Outlet />
      </Section>
    </>
  )
}
