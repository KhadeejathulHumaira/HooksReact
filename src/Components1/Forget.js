import React, { useEffect, useState } from 'react'
import './Forget.css'
import axios from 'axios'

function Forget() {

    const[user_update,setUser_update]=useState({
        emailid:'',
        password:'',
        re_password:''
    })
    const handleChange=(e)=>{
        setUser_update({...user_update,
            [e.target.name]:e.target.value  })
    }

    const handleSubmit=(e)=>{
       
        axios.patch(`http://localhost:3001/details?emailid=${user_update.emailid}`,
        {password:user_update.password,
          confirm_password:user_update.re_password})
        .then(res=>{
            console.log(res.data)
        })
        console.log(user_update)
        e.preventDefault()
    }
    return (
        <div >
            <form className="forget" onSubmit={handleSubmit}>
          
            <label className="forget_label"> Email Id</label>
            <input type="email" required className="forget_input" name="emailid" onChange={handleChange}></input>
           
         
            <label className="forget_label">Password</label>
            <input type="password" required className="forget_input" name="password" onChange={handleChange}></input>
         
            
            <label className="forget_label" > Retype Password</label>
            <input type="password" className="forget_input" required name="re_password" onChange={handleChange}></input>

            <button className="forget_button">Submit</button>
            </form>
     
            
        </div>
    )
}

export default Forget
