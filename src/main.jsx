import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App'
import Root from './Components/Root/Root'
import Home from './Components/Home/Home'
import Mobiles from './Components/Mobiles/Mobiles'
import Laptops from './Components/Laptops/Laptops'
import Users from './Components/Users/Users'
import Users2 from './Components/Users2/Users2'
import UserDetails from './Components/UserDetails/UserDetails'

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

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
    HydrateFallback: () => <div>Loading application...</div>,
    children: [
       {index: true, Component: Home},
       {path: 'mobiles', Component: Mobiles},
       {path: 'laptops', Component: Laptops},
       

       {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
       },

       {
         path: 'users2',
         element: <Suspense fallback={<span>Loading....</span>}>
         <Users2 usersPromise={usersPromise}></Users2>
         </Suspense>
       },

       {
        path: 'users/:userId',
        loader: ({ params }) => fetch(),
        Component: UserDetails
       }
    ]
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
