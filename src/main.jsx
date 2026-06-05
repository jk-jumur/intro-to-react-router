import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App'
import Root from './Components/Root/Root'
import Home from './Components/Home/Home'
import Mobiles from './Components/Mobiles/Mobiles'
import Laptops from './Components/Laptops/Laptops'



const router = createBrowserRouter([
    
  {
    path: '/',
    element: <div>this my world</div>
  },
  {
    path:'about',
    element: <div>i am ver happy today</div>
  },
  {
    path: 'blogs',
    element: <div>i hate men yar</div>
  },

  {
    path: 'app',
    Component: App
  },

  {
    path:'/app2',
    // element: <App></App>
    Component: App
  },
  {
    path: '/',
    Component: Root,
    children: [
       {index: true, Component: Home},
       {path: 'mobiles', Component: Mobiles},
       {path: 'laptops', Component: Laptops}
    ]
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
