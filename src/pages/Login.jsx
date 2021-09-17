import { Link, useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useMutation } from '@apollo/client'

import { preventDefault } from '@lib/ui-events'
import { authStateChanged } from '@events/auth'
import { LOGIN_MUTATION } from '@services/graphql/mutations'
import useToastError from '@hooks/useToastError'

import FormInputField from '@components/FormInputField'
import useFormFields from '@hooks/useFormFields'
import LoginLeftContainer from '@components/LoginLeftContainer'
import LoginRightContainer from '@components/LoginRightContainer'
import { useEffect } from 'react'

export default function Login() {
  const [formFields, registerField] = useFormFields({
    username: '',
    password: '',
  })
  const [loginUser, { error }] = useMutation(LOGIN_MUTATION)
  const history = useHistory()

  const handleSubmit = async () => {
    const response = await loginUser({ variables: formFields })

    handleAuthStateUpdate(response.data.tokenAuth.token)
  }

  const redirectToDashboard = () => history.push('/dashboard')

  const handleAuthStateUpdate = token =>
    authStateChanged(token, redirectToDashboard)

  useToastError(error, 'Credenciais inválidas, confira-as.')

  return (
    <div className="w-full h-screen grid lg:grid-cols-5 text-gray-800">
      <LoginLeftContainer>
        <form
          className="w-[90%] max-w-md flex flex-col gap-4"
          onSubmit={preventDefault(handleSubmit)}
        >
          <h2 className="text-center text-4xl font-bold tracking-tighter">
            Bem vindo!
          </h2>
          <p className="mb-4 text-gray-400 text-center">
            Faça login para acessar o conteúdo
          </p>
          <FormInputField
            label="Usuário"
            placeholder="Usuário"
            required
            {...registerField('username')}
          />
          <FormInputField
            label="Senha"
            placeholder="Senha"
            type="password"
            required
            {...registerField('password')}
          />
          <button
            className="py-2 text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded"
            type="submit"
          >
            Login
          </button>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="border-gray-300 text-purple-600 rounded transition focus:ring-purple-600"
                id="remember-me"
              />
              <label className="ml-2" htmlFor="remember-me">
                Lembrar de mim
              </label>
            </div>
            <Link className="text-purple-600 hover:underline" to="/register">
              Registrar-me
            </Link>
          </div>
        </form>
      </LoginLeftContainer>
      <LoginRightContainer>
        <h1 className="text-4xl text-white font-bold text-center tracking-tighter">
          Abstract Singleton Proxy
          <br />
          Factory Bean
        </h1>
      </LoginRightContainer>
    </div>
  )
}
