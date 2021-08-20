import { Redirect, Route } from 'react-router-dom'

/**
 *
 * @param {PrivateRouteProps} props
 * @returns
 */
export default function PrivateRoute({
  component,
  path,
  exact = false,
  permissionHandler,
}) {
  if (!permissionHandler()) {
    return <Redirect to="/" />
  }

  return <Route exact={exact} path={path} component={component} />
}

/**
 * @typedef PrivateRouteProps
 *
 * @property {JSX.Element} component Component to be rendered
 * @property {string} path Route path for the component
 * @property {boolean} exact If the path should be exactly the same as the passed
 * @property {() => boolean} permissionHandler Callback function to check if the user has permission to access a given route
 */
