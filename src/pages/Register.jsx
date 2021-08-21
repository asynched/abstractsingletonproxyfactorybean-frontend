import { useReducer } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'

import { dispatchAction } from '@lib/dispatch'
import { preventDefault } from '@lib/ui-events'
import { showErrorToast, showSuccessToast } from '@lib/toast-events'
import FormInputField from '@components/FormInputField'
import { useMutation } from '@apollo/client'
import { REGISTER_MUTATION } from '@services/graphql/mutations'
import useToastError from '@hooks/useToastError'
import { useToastSuccess } from '@hooks/useToastSuccess'

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
  const [registerUser, { error, data }] = useMutation(REGISTER_MUTATION)

  const handleSubmit = async () => {
    registerUser({ variables: state })
  }

  useToastError(error, 'Erro ao tentar se cadastrar, verifique as credenciais')

  useToastSuccess(data, 'Cadastrado com sucesso, redirecionando.', () => {
    setTimeout(() => {
      history.push('/dashboard')
    }, 2_000)
  })

  return (
    <div className="w-full h-screen grid text-gray-800 lg:grid-cols-5">
      <div className="col-span-3 hidden lg:flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
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
      <div className="col-span-2 flex flex-col items-center justify-center">
        <form
          className="w-[90%] max-w-lg"
          onSubmit={preventDefault(handleSubmit)}
        >
          <h1 className="mb-2 text-4xl font-bold tracking-tighter text-center">
            Registrar-se
          </h1>
          <p className="mb-4 text-gray-500 text-center">
            Cadastre-se para acessar os conteúdos
          </p>
          <FormInputField
            label="Nome de usuário"
            placeholder="Nome de usuário"
            value={state.username}
            pattern="^[a-zA-Z0-9]{5,}$"
            title="Nome de usuário contendo apenas letras e números"
            required
            changeHandler={value =>
              dispatchAction(dispatch, 'set/username', value)
            }
          />
          <div className="my-4 grid grid-cols-2 gap-4">
            <FormInputField
              label="Nome"
              placeholder="Nome"
              delay={300}
              pattern="^[^\s]{3,16}$"
              title="Primeiro nome sem espaços"
              required
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
              pattern="^[^\s]{3,16}$"
              title="Sobrenome nome sem espaços"
              required
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
            pattern="(.){8,}"
            title="Senha com no mínimo 8 caracteres"
            required
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
          <p className="mt-6 text-center text-gray-500">
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
