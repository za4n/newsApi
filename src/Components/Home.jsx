import React ,{useContext}from 'react'
import { Link } from 'react-router-dom'
import {ContextNews} from './ContextNewsProvider'

export default function Home() {
  const {changeCountry} = useContext(ContextNews);

  return (
    <>
    <header className="welcome-header">
    <h1>Welcome to NewsAPI</h1>
    <p>Stay updated with the latest news from around the world!</p>
    <Link to="/" className="explore-button">Explore Now</Link>
  </header>

  <section className="about-section">
    <h2>About News API</h2>
    <p>News API is your one-stop destination for all the latest news across various categories such as Technology, Sports, Science, and Entertainment. Our platform brings you real-time updates from reliable sources, so you never miss out on the important headlines and stories that matter to you.</p>
  </section>

  <section>
  <nav className="country-navbar">
    <button  onClick={(e)=>{changeCountry(e); e.target.classList.toggle('active')}} className="country-button">us</button>
    <button onClick={(e)=>{changeCountry(e)}} className="country-button">in</button>
  </nav>
  </section>
    </>
  )
}
