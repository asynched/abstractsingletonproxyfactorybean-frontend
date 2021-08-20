import { BrowserRouter, Route, Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import { checkUserPermission } from '@lib/auth'

import Login from '@pages/Login'
import Dashboard from '@pages/Dashboard'
import Tasks from '@pages/Tasks'
import Register from '@pages/Register'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
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
