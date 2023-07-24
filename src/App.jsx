


import { Route, RouterProvider, createBrowserRouter , createRoutesFromElements } from 'react-router-dom';
import './main.css';

import Nav from './Components/Nav';
import Home from './Components/Home';
import General from './Components/General';
import Sport from './Components/Sport';
import React from 'react';



import ContextNewsProvider from './Components/ContextNewsProvider';










function App() {



 const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element = {<Nav />}>
      <Route index element = {<Home />}/>
      <Route path='general' element = {<General  />}/>  
      <Route path='sports' element = {<Sport/>}/>  
    </Route>
  
    
  )
 );

 return(
<>
<ContextNewsProvider>
<RouterProvider router={router}/>
</ContextNewsProvider>
   </>
   
);
}



export default App;
