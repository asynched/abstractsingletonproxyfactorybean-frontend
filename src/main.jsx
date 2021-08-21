import ReactDOM from 'react-dom'
import App from './App'

import './main.css'

// Cannot be styled with TailWind only. :(
import './styles/loader.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
