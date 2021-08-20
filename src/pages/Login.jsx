import { useReducer, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { dispatchAction } from '@lib/dispatch'
import { preventDefault } from '@lib/ui-events'
import { handleAuthStateSetup } from '@lib/auth'
import { showErrorToast } from '@lib/toastEvents'
import { loginUser } from '@services/graphql/auth'
import { setAuthorizationHeaders } from '@services/graphql'
import { AuthContext } from '@contexts/AuthContext'
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
      return { ...state, token: action.payload, error: false }
  }
}

export default function Login() {
  const { dispatch: applicationDispatch } = useContext(AuthContext)
  const [state, dispatch] = useReducer(loginReducer, INITIAL_STATE)

  const handleSubmit = async () => {
    const { username, password } = state
    const [data, error] = await loginUser(username, password)

    if (error) {
      dispatchAction(dispatch, 'login/error')
    }

    const { token } = data.tokenAuth

    dispatchAction(dispatch, 'login/success', token)
  }

  useEffect(() => {
    if (state.token) {
      handleAuthStateSetup(
        applicationDispatch,
        state.token,
        setAuthorizationHeaders,
      )
    }
  }, [state.token])

  useEffect(() => {
    if (state.error) {
      showErrorToast('Credenciais inválidas, confira-as.')
    }
  }, [state.error])

  return (
    <div className="w-full h-screen grid lg:grid-cols-2">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <form
          className="w-[90%] max-w-lg p-12 border rounded flex flex-col gap-4"
          onSubmit={preventDefault(handleSubmit)}
        >
          <h2 className="text-center text-4xl font-bold tracking-tighter">
            Login
          </h2>
          <FormInputField
            label="Usuário"
            value={state.username}
            placeholder="Usuário"
            changeHandler={value =>
              dispatchAction(dispatch, 'set/username', value)
            }
          />
          <FormInputField
            label="Senha"
            placeholder="Senha"
            delay={300}
            type="password"
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
              <input type="checkbox" id="remember-me" />
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
      <div className="hidden w-full h-full lg:flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500">
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
