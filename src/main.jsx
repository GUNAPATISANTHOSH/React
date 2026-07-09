import { createRoot } from "react-dom/client";
import App from './App.jsx'
// import './assets/css/bootstrap.css'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
createRoot(document.getElementById('root')).render(
  <App/>
)