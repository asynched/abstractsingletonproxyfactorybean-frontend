import { useReducer } from 'react'
import { dispatchAction } from '@lib/dispatch'
import { handleFieldChange, preventDefault } from '@lib/ui-events'
import { loginUser } from '@services/graphql'

const INITIAL_STATE = {
  username: '',
  password: '',
}

const loginReducer = (state, action) => {
  switch (action.type) {
    case 'set/username':
      return { ...state, username: action.payload }
    case 'set/password':
      return { ...state, password: action.payload }
  }
}

export default function Login() {
  const [state, dispatch] = useReducer(loginReducer, INITIAL_STATE)

  const handleSubmit = async () => {
    const { username, password } = state

    console.log(username, password)

    const [data, error] = await loginUser(username, password)

    console.log(data)
    console.log(error)
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="mb-4 max-w-min text-4xl font-bold tracking-tighter leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
        AbstractSingletonProxyFactoryBean
      </h1>
      <form
        className="w-[90%] max-w-screen-sm p-4 border rounded flex flex-col gap-4"
        onSubmit={preventDefault(handleSubmit)}
      >
        <h2 className="text-center text-4xl font-bold tracking-tighter">
          Login
        </h2>
        <div className="flex flex-col">
          <label className="mb-2 text-lg font-semibold" htmlFor="user">
            Usuário
          </label>
          <input
            className="py-2 px-4 border rounded outline-none focus:border-transparent focus:ring-2 focus:ring-purple-600"
            name="user"
            type="text"
            placeholder="Luanzinho1010..."
            value={state.username}
            onChange={handleFieldChange(value =>
              dispatchAction(dispatch, 'set/username', value),
            )}
          />
        </div>
        <label className="mb-2 text-lg font-semibold" htmlFor="password">
          Senha
        </label>
        <input
          className="py-2 px-4 border rounded outline-none focus:border-transparent focus:ring-2 focus:ring-purple-600"
          name="password"
          type="password"
          placeholder="senha123..."
          value={state.password}
          onChange={handleFieldChange(value =>
            dispatchAction(dispatch, 'set/password', value),
          )}
        />
        <div className="flex flex-col"></div>
        <button
          className="py-2 px-4 text-white text-lg font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 rounded"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  )
}
