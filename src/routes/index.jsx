import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from '@pages/Login'
import Dashboard from '@pages/Dashboard'
import Tasks from '@pages/Tasks'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/tasks/:id" component={Tasks} />
      </Switch>
    </BrowserRouter>
  )
}
