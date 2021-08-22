import { BrowserRouter, Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import { checkUserPermission } from '@lib/auth'

import Login from '@pages/Login'
import Dashboard from '@pages/Dashboard'
import Tasks from '@pages/Tasks'
import Register from '@pages/Register'
import Schedule from '@pages/Schedule'
import NotFound from '@pages/NotFound'
import Teacher from '@pages/Teacher'

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
        <PrivateRoute
          path="/schedule"
          component={Schedule}
          permissionHandler={checkUserPermission}
        />
        <PrivateRoute
          path="/teachers/:id"
          component={Teacher}
          permissionHandler={checkUserPermission}
        />
        <PrivateRoute
          component={NotFound}
          permissionHandler={checkUserPermission}
        />
      </Switch>
    </BrowserRouter>
  )
}
