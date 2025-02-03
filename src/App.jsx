import React from 'react';  // Yeh line add karna hai
import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navebar from './assets/components/Navebar';
import Home from './assets/components/Home';
import Past from './assets/components/Past';
import ViewPaste from './assets/components/ViewPaste';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navebar />
        <Home />
      </div>
    },
    {
      path:"/pastes",
      element:
      <div>
         <Navebar />
         <Past />
      </div>
    },
    {
      path:"/pastes/:id",
      element:
      <div>
       <Navebar />
       <ViewPaste />
      </div>
    },
  ]
)

function App() {
  return (
    <div >
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
