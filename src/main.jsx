import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//'import App from './App.jsx'
//import './functions/MyFunctions.jsx'
import './index.css'
import MyPromisesRace from './functions/MyPromisesRace'
import MyFetchsAPIs from './functions/MyFetchAPIs'
import MyFetchPost from './functions/MyFetchPost'
import MyFetchPut from './functions/MyFetchPut'
import MyPromises from './functions/MyPromises'
import MyPromisesAll from './functions/MyPromisesAll'
//import MyFetchBlob from './functions/MyFetchBlob.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < MyFetchPut/>
  </StrictMode>,
)
