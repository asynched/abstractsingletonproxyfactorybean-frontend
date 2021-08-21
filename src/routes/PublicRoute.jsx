import { getTokenFromLocalStorage } from '@lib/local-storage'
import { authStateChanged } from '@events/auth'
import { useEffect, useState } from 'react'
import { Route, useHistory } from 'react-router-dom'

/**
 *
 * @param {PublicRouteProps} props
 * @returns
 */
export default function PublicRoute({ component, path, exact = false }) {
  const [token] = useState(getTokenFromLocalStorage())
  const history = useHistory()

  useEffect(() => {
    if (token) {
      authStateChanged(token, () => history.push('/dashboard'))
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
