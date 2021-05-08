import React,{Component} from 'react'
import Dummy from './DispDetails'


class Welcome extends Component{

    constructor(){
        super()
        this.state={
            message:"Hello Visitor ",
            count: 0
        }
    }
    onClick_Handler(){
        this.setState((prev,props)=>({
            count:prev.count+4,
            message:props.name
        }))
    }
    greetThem(dummt){
        alert(`Hello ${this.props.name} ${dummt}`)
    }
    render(){
        return(
            <div>
                <h2>
                    HELLOOO{this.state.message}{this.state.count}
                </h2>
                <button onClick={()=>this.onClick_Handler()}>Subscribe </button>
                
            </div>
        )
    }
}

export default Welcome