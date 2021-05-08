import React from 'react'
import Label from './Label'
import './Home.css';

function Home(){
    return(

        <div>
            <nav>
                <ul>
                    <li className="signup"> SignUp</li>
                    <li className="login">Login  </li>
                </ul>
            </nav>
            <Label 
            name="FirstName"
            type="text"
            />
        </div>
    )
}
export default Home