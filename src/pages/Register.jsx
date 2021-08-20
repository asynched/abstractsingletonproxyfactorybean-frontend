import { useReducer } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'

import { dispatchAction } from '@lib/dispatch'
import { preventDefault } from '@lib/ui-events'
import { showErrorToast, showSuccessToast } from '@lib/toast-events'
import { registerUser } from '@services/graphql/auth'
import FormInputField from '@components/FormInputField'

const INITIAL_STATE = {
  username: '',
  firstName: '',
  lastName: '',
  password: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'set/username':
      return { ...state, username: action.payload }
    case 'set/firstName':
      return { ...state, firstName: action.payload }
    case 'set/lastName':
      return { ...state, lastName: action.payload }
    case 'set/password':
      return { ...state, password: action.payload }
  }
}

export default function Register() {
  const history = useHistory()
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const handleSubmit = async () => {
    const [, error] = await registerUser(state)

    if (error) {
      showErrorToast('Erro, confira os dados do formulário.')
      return
    }

    showSuccessToast('Cadastrado(a) com sucesso, redirecionando.')

    setTimeout(() => {
      history.push('/')
    }, 2_000)
  }

  return (
    <div className="w-full h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
        <motion.h1
          initial={{ opacity: 0, x: -128 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl text-white font-bold text-center tracking-tighter"
        >
          Abstract Singleton Proxy
          <br />
          Factory Bean
        </motion.h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <form
          className="p-12 w-[90%] max-w-lg border rounded"
          onSubmit={preventDefault(handleSubmit)}
        >
          <h1 className="text-3xl font-bold tracking-tighter text-center mb-4 ">
            Registrar-se
          </h1>
          <FormInputField
            label="Nome de usuário"
            placeholder="Nome de usuário"
            value={state.username}
            changeHandler={value =>
              dispatchAction(dispatch, 'set/username', value)
            }
          />
          <div className="my-4 grid grid-cols-2 gap-4">
            <FormInputField
              label="Nome"
              placeholder="Nome"
              delay={300}
              value={state.firstName}
              changeHandler={value =>
                dispatchAction(dispatch, 'set/firstName', value)
              }
            />
            <FormInputField
              label="Sobrenome"
              placeholder="Sobrenome"
              delay={450}
              value={state.lastName}
              changeHandler={value =>
                dispatchAction(dispatch, 'set/lastName', value)
              }
            />
          </div>
          <FormInputField
            label="Senha"
            placeholder="Senha"
            type="password"
            delay={600}
            value={state.password}
            changeHandler={value =>
              dispatchAction(dispatch, 'set/password', value)
            }
          />
          <button
            className="mt-8 py-2 w-full text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded"
            type="submit"
          >
            Registrar
          </button>
          <p className="mt-6 text-center">
            Já possui uma conta?{' '}
            <Link className="text-purple-600 hover:underline" to="/">
              Faça login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
