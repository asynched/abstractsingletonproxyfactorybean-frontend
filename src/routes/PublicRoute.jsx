import { AuthContext } from '@contexts/AuthContext'
import { getTokenFromLocalStorage } from '@lib/local-storage'
import { authStateChanged } from '@events/auth'
import { useContext, useEffect, useState } from 'react'
import { Redirect, Route, useHistory } from 'react-router-dom'

/**
 *
 * @param {PublicRouteProps} props
 * @returns
 */
export default function PublicRoute({ component, path, exact = false }) {
  const { dispatch: applicationDispatch } = useContext(AuthContext)
  const [token] = useState(getTokenFromLocalStorage())
  const history = useHistory()

  useEffect(() => {
    if (token) {
      authStateChanged(applicationDispatch, token, () =>
        history.push('/dashboard'),
      )
    }
  }, [])

  return <Route exact={exact} path={path} component={component} />
}

/**
 * @typedef PublicRouteProps
 *
 * @property {() => JSX.Element} component Component to be rendered
 * @property {string} path Route path for the component
 * @property {boolean} exact If the path should be exactly the same as the passed
 */
