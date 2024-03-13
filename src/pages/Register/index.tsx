import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { auth } from '../../services/firebaseConnection'
import {
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'

import { AuthContext } from '../../contexts/authContext'

import { Input } from '../../components/Input'
import { Form, SectionLogin } from '../Login/styles'

const schema = z.object({
  name: z.string().nonempty('O campo nome é obrigatório'),
  email: z
    .string()
    .email('Insira um email válido')
    .nonempty('O campo email é obrigatório'),
  password: z
    .string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .nonempty('O campo senha é obrigatório'),
})

type FormData = z.infer<typeof schema>

export const Register = () => {
  const { handleInfoUser } = useContext(AuthContext)

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
    console.log('DATA:', data)
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (user) => {
        await updateProfile(user.user, {
          displayName: data.name,
        })

        handleInfoUser({
          name: data.name,
          email: data.email,
          uid: user.user.uid,
        })

        console.log('CADASTRADO COM SUCESSO!')
        navigate('/cadastro', { replace: true })
      })
      .catch((error) => {
        console.log('ERRO AO CADASTRAR ESTE USUÁRIO')
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
      <div className="login">Registro</div>
      <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Nome completo"
            name="name"
            error={errors.name?.message}
            register={register}
          />
          <Input
            type="email"
            placeholder="Nome"
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
