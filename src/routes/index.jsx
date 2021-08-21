import { BrowserRouter, Switch } from 'react-router-dom'

import { checkUserPermission } from '@lib/auth'

import Login from '@pages/Login'
import Dashboard from '@pages/Dashboard'
import Tasks from '@pages/Tasks'
import Register from '@pages/Register'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/" component={Login} />
        <PublicRoute path="/register" component={Register} />
        <PrivateRoute
          path="/tasks/:id"
          component={Tasks}
          permissionHandler={checkUserPermission}
        />
        <PrivateRoute
          path="/dashboard"
          component={Dashboard}
          permissionHandler={checkUserPermission}
        />
      </Switch>
    </BrowserRouter>
  )
}
