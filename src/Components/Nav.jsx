import React ,{useContext}from 'react'
import { Outlet , Link  } from 'react-router-dom'
import {ContextNews} from './ContextNewsProvider';
export default function Nav(){
  const {changeCategory} = useContext(ContextNews);
  return (
    <div>
      <nav>
    <div className="navbar">
      <Link to= "/"className="logo" >NewsAPI</Link>
      
   <ul className="nav-links">
      
    <li><Link to = 'general'onClick={()=>{changeCategory('general')}}>General</Link></li>
      <li><Link to = 'sports'onClick={()=>{changeCategory('sports')}}>Sports</Link></li>
      <li><Link to = '/'>Technology</Link></li>
      <li><Link to = '/'>Business</Link></li>
      </ul>
    </div>
  </nav>
  <main>
    <Outlet></Outlet>
  </main>
    </div>
  )
}
