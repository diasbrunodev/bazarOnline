import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

import { Input } from '../../components/Input'
import { Form, SectionLogin } from './styles'

const schema = z.object({
  email: z
    .string()
    .email('Insira um email válido')
    .nonempty('O campo email é obrigatório'),
  password: z.string().nonempty('O campo senha é obrigatório'),
})

type FormData = z.infer<typeof schema>

export const Login = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  })

  async function onSubmit(data: FormData) {
    // console.log('DATA:', data)
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((user) => {
        console.log('LOGADO COM SUCESSO!')
        console.log('USER', user)
        navigate('/cadastro', { replace: true })
      })
      .catch((error) => {
        console.log('ERRO AO LOGAR')
        console.log(error)
      })
  }

  useEffect(() => {
    async function handleLogout() {
      await signOut(auth)
    }
    handleLogout()
  }, [])

  return (
    <SectionLogin>
      <div className="login">Login</div>
      <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            placeholder="Login"
            name="email"
            error={errors.email?.message}
            register={register}
          />
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            error={errors.password?.message}
            register={register}
          />
          <button type="submit">Logar</button>
        </Form>
      </div>
    </SectionLogin>
  )
}
