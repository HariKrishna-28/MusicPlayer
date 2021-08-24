import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'
import dotenv from 'dotenv'

const code = new URLSearchParams(window.location.search).get('code')
dotenv.config('../config.env')

function App() {
  return code ? <Dashboard code={code} /> : <Login />
}

export default App;
