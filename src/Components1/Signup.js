import React,{useState} from 'react'
import './Signup.css'
import axios from 'axios'

function Signup() {


    const [details,setDetails]=useState({
        name:'',
        emailid:'',
        password:'',
        confirm_password:'',
        gender:'',
        dob:''

    })

    const handleSubmit=(e)=>{
        if (details.password===details.confirm_password){
            axios.post('http://localhost:3001/details',details)
            .then(res=>{
                alert("Successfully Submitted")
            })
        }
        else{
            alert("Password Doesn't Match")
        }
       

        
        e.preventDefault()
    }
    const handleChange=(e)=>{
        setDetails({...details,
        [e.target.name]:e.target.value})
    }




    return (
        <div className="signup">
            
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
            <div className="signup_fields">
                <label className="signup_label"> Name </label>
                <input type="text" className="signup_input" required name="name" onChange={handleChange}></input>
            </div>
            <div className="signup_fields">
                <label className="signup_label"> Email Id </label>
                <input type="email" className="signup_input" required name="emailid" onChange={handleChange}></input>
            </div>
            <div className="signup_fields">
                <label className="signup_label"> Password </label>
                <input type="password" className="signup_input" required name="password" onChange={handleChange}></input>
            </div>
            <div className="signup_fields">
                <label className="signup_label"> Confirm Password </label>
                <input type="password" className="signup_input" required name="confirm_password" onChange={handleChange}></input>
            </div>
            <div className="signup_fields">
                <label className="signup_label"> Gender </label>
                <input type="text" className="signup_input" required name="gender" onChange={handleChange}></input>
            </div>
            <div className="signup_fields">
                <label className="signup_label"> DOB </label>
                <input type="date" className="signup_input" required name="dob" onChange={handleChange}></input>
            </div>
            <div className="signup_fields">
                <button className="signup_btn">Submit</button>
            </div>
            </form>
            
        </div>
    )
}

export default Signup
