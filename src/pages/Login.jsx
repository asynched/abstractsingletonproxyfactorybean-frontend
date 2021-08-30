import { useReducer, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useMutation } from '@apollo/client'

import { dispatchAction } from '@lib/dispatch'
import { preventDefault } from '@lib/ui-events'
import { authStateChanged } from '@events/auth'
import { LOGIN_MUTATION } from '@services/graphql/mutations'
import useToastError from '@hooks/useToastError'

import FormInputField from '@components/FormInputField'

const INITIAL_STATE = {
  username: '',
  password: '',
  error: false,
  token: null,
}

const loginReducer = (state, action) => {
  switch (action.type) {
    case 'set/username':
      return { ...state, username: action.payload }
    case 'set/password':
      return { ...state, password: action.payload }
    case 'login/error':
      return { ...state, error: true }
    case 'login/success':
      return { ...state, error: false, token: action.payload }
    default:
      throw new Error(`Action type "${action.type}" is not defined.`)
  }
}

export default function Login() {
  const [state, dispatch] = useReducer(loginReducer, INITIAL_STATE)
  const [loginUser, { error, data }] = useMutation(LOGIN_MUTATION)
  const history = useHistory()

  const handleSubmit = () => {
    loginUser({ variables: state })
  }

  const redirectToDashboard = () => history.push('/dashboard')

  useEffect(() => {
    const token = data?.tokenAuth?.token
    if (token) {
      authStateChanged(token, redirectToDashboard)
    }
  }, [data?.tokenAuth?.token])

  useToastError(error, 'Credenciais inválidas, confira-as.')

  return (
    <div className="w-full h-screen grid lg:grid-cols-5 text-gray-800">
      <div className="col-span-2 w-full h-full flex flex-col items-center justify-center">
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
            value={state.username}
            placeholder="Usuário"
            required
            changeHandler={value =>
              dispatchAction(dispatch, 'set/username', value)
            }
          />
          <FormInputField
            label="Senha"
            placeholder="Senha"
            delay={300}
            type="password"
            required
            value={state.password}
            changeHandler={value =>
              dispatchAction(dispatch, 'set/password', value)
            }
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
      </div>
      <div className="col-span-3 hidden w-full h-full lg:flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500">
        <motion.h1
          initial={{ opacity: 0, x: 128 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl text-white font-bold text-center tracking-tighter"
        >
          Abstract Singleton Proxy
          <br />
          Factory Bean
        </motion.h1>
      </div>
    </div>
  )
}
