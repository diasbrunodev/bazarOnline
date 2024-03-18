import { createBrowserRouter } from 'react-router-dom'

import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Cadastro } from './pages/Cadastro'
import { Register } from './pages/Register'
import { Private } from './routes/private'
import { ItemDetail } from './pages/ItemDetail'

import { Dashboard } from './pages/Cadastro/Dashboard'
import { Cart } from './pages/Cart'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/item/:id',
        element: <ItemDetail />,
      },
      {
        path: '/carrinho',
        element: (
          <Private>
            <Cart />
          </Private>
        ),
      },
      {
        path: '/cadastro',
        element: (
          <Private>
            <Cadastro />
          </Private>
        ),
      },
      {
        path: '/dashboard',
        element: (
          <Private>
            <Dashboard />
          </Private>
        ),
      },
    ],
  },

  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
])
export { router }
