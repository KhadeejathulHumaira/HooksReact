import React from 'react'

function Label(props){
   return( <div>
        <label className={props.name}>{props.name} </label>
        <input type={props.type}  className={props.name+"input"}></input>
    </div>
   )
}
export default Label
