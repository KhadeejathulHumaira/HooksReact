import React from 'react'
import './Home1.css'
import {Link} from 'react-router-dom'


function Home1() {
    return (
        <div className="Homepage">
           <Link to ='/login'><button className="home_btn">Login</button></Link>
           <Link to='/signup'><button className="home_btn">Signup</button></Link>

        </div>
    )
}

export default Home1
