import { lazy, Suspense } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import { checkUserPermission } from '@lib/auth'
import LoadingContainer from '@components/LoadingContainer'

const Login = lazy(() => import('@pages/Login'))
const Dashboard = lazy(() => import('@pages/Dashboard'))
const Tasks = lazy(() => import('@pages/Tasks'))
const Register = lazy(() => import('@pages/Register'))
const Schedule = lazy(() => import('@pages/Schedule'))
const NotFound = lazy(() => import('@pages/NotFound'))
const Teacher = lazy(() => import('@pages/Teacher'))

export default function Routes() {
  return (
    <Suspense fallback={<LoadingContainer />}>
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
    </Suspense>
  )
}
