import React,{useEffect,useState} from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useParams} from 'react-router-dom'
import './Account.css'
import axios from 'axios'


function Account() {
   const { params } =useParams()
    
   const [accountholder,setAccountholder]=useState([])
   useEffect(()=>{
        axios.get('http://localhost:3001/details')
        .then(res=>{
            setAccountholder(res.data)
        })
     },[] )
    
     

   

    return (
            <React.Fragment>
            <div className="account">
            <div className="header">
                <AccountCircleIcon  fontSize="large"/>
                <p className="acct_name">{ params }</p>
            
            </div>
            {
                accountholder.map((item)=>{
                   if(item.emailid==params){
                       return <h2 className="welcome">Welcome {item.name}!!!</h2>
                   }
                })
            }
            </div>
           
           
            </React.Fragment>
        
    )
}

export default Account
