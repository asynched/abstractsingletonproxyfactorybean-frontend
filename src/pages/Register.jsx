import { Link, useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'

import { REGISTER_MUTATION } from '@services/graphql/mutations'
import { preventDefault } from '@lib/ui-events'
import useFormFields from '@hooks/useFormFields'
import useToastError from '@hooks/useToastError'
import useToastSuccess from '@hooks/useToastSuccess'

import FormInputField from '@components/FormInputField'

export default function Register() {
  const history = useHistory()
  const [formFields, registerField] = useFormFields({
    username: '',
    firstName: '',
    lastName: '',
    password: '',
  })
  const [registerUser, { error, data }] = useMutation(REGISTER_MUTATION)

  const handleSubmit = async () => {
    registerUser({ variables: formFields })
  }

  useToastError(error, 'Erro ao tentar se cadastrar, verifique as credenciais.')

  useToastSuccess(data, 'Cadastrado com sucesso, redirecionando.', () => {
    setTimeout(() => {
      history.push('/dashboard')
    }, 2_000)
  })

  return (
    <div className="w-full h-screen grid text-gray-800 lg:grid-cols-5">
      <div className="col-span-3 hidden lg:flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
        <h1 className="text-4xl text-white font-bold text-center tracking-tighter">
          Abstract Singleton Proxy
          <br />
          Factory Bean
        </h1>
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
            pattern="^[a-zA-Z0-9]{5,}$"
            title="Nome de usuário contendo apenas letras e números"
            required
            {...registerField('username')}
          />
          <div className="my-4 grid grid-cols-2 gap-4">
            <FormInputField
              label="Nome"
              placeholder="Nome"
              pattern="^[^\s]{3,16}$"
              title="Primeiro nome sem espaços"
              required
              {...registerField('firstName')}
            />
            <FormInputField
              label="Sobrenome"
              placeholder="Sobrenome"
              pattern="^[^\s]{3,16}$"
              title="Sobrenome nome sem espaços"
              required
              {...registerField('lastName')}
            />
          </div>
          <FormInputField
            label="Senha"
            placeholder="Senha"
            type="password"
            pattern="(.){8,}"
            title="Senha com no mínimo 8 caracteres"
            required
            {...registerField('password')}
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
