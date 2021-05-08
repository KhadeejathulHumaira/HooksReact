import React, { Component } from 'react'
import './Form.css'


class FormClass extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            details:{
             name:'',
             emailid:'',
             password:'',
             conf_pass:'',
             gender:'',
             dob:'',
             course:''
             
        } 
    }
    this.handleChange=this.handleChange.bind(this)
    this.displayItem=this.displayItem.bind(this)
 
    }
    
    handleChange(event){
        const val=event.target.value;
        const details={...this.state.details,[event.target.name]:val}
        this.setState({details})
        console.log(details)
    }
    displayItem(event){
        if(this.state.details.password==this.state.details.conf_pass){
            alert(`${this.state.details.name}\n${this.state.details.emailid}\n${this.state.details.gender}\n${this.state.details.dob}\n${this.state.details.course}`)
            event.preventDefault()
        }
        else{
            alert("Check password")
        }
       
    }
    
    
    render() {
        return (
                <div>
                <form onSubmit={this.displayItem}>
                    <h1 className="form">Registration Form</h1>
                    <div>
                        {console.log(this.state)}
                    <label className="UserName">User Name:</label>
                    <input type="text" 
                    required
                    onChange={this.handleChange}
                    value={this.state.details.name}
                    name="name"
                    ></input>
                    </div>

                    <div>
                    <label className="EmailId">Email Id:</label>
                    <input type="email"
                    required
                    onChange={this.handleChange}
                    name="emailid"
                    ></input>
                    </div>

                    <div>
                    <label className="Password">Password:</label>
                    <input type="password"
                    required
                    onChange={this.handleChange}
                    name="password"
                    ></input>
                    </div>

                    <div>
                    <label className="Confirm_Password"> Confirm Password:</label>
                    <input type="password" 
                    required
                    onChange={this.handleChange}
                    name="conf_pass"
                    ></input>
                    </div>
                    
                    <div>
                    <label className="Gender"> Gender:</label>
                    <input type="text" 
                    required
                    onChange={this.handleChange}
                    name="gender"
                    ></input>
                    </div>

                    <div>
                    <label className="Dob"> DOB:</label>
                    <input type="text"
                     required
                     onChange={this.handleChange}
                     name="dob"
                     ></input>
                    </div>

                    <div>
                    <label className="course"> Course:</label>
                    <input type="text"
                     required
                     onChange={this.handleChange}
                     name="course"
                     ></input>
                    </div>
                    <button type="submit" 
                    className="btn_submit"
                  
                   >Submit</button>

                </form>
                
                
                </div>
          
        )
    }
}

export default FormClass
