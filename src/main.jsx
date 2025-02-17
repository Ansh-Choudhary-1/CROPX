import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Market from './components/Market.jsx'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import './i18n.js';
import Map from './components/Map.jsx'
import MapML from './components/MapML.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/marketplace" element={<Market/>}/>
      <Route path="/weather-prediction" element={<Map/>}/>
      <Route path="/MapML" element={<MapML/>}/>
    </Route>
  ))

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
