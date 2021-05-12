import React,{useState,useEffect} from 'react'
import './Login.css'
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [user,setUser]=useState({
        emailid:'',
        password:''
    })
    const history=useHistory()
    const [info,setInfo]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/details')
        .then(res=>{
            setInfo(res.data)
            
        })
    },[])
    
    const handleChange=(e)=>{
       setUser({...user,
        [e.target.name]:e.target.value})
    }
    
    const handleSubmit=(e)=>{
        info.map((item)=>{
            if(item.emailid==user.emailid){
                if(item.password==user.password){
                    history.push(`/account/${user.emailid}`)
                }
                else{
                    alert("Check your EmailId /password")
                }
            }
            
        })
        e.preventDefault()

    }

    return (
        <div >
            <form className="login" onSubmit={handleSubmit}>
            <p className="login_para">Sign into your account</p>
            <label className="login_label">Email Id:</label>
            <input type="email" className="login_input" required onChange={handleChange} name="emailid"/>
            <label className="login_label"> Password:</label>
            <input type="password" className="login_input" required onChange={handleChange} name="password"/>
            <button className="login_button">Sign In</button>
            <div className="login_forget_password">
                <p className="login_para">Forget Password??</p>
                <Link to='/forget'><button className="forget_btn"> click here</button></Link>
            </div>
            </form>
           
        </div>
    )
}

export default Login

