import React,{useState} from 'react'
function Contact(){

    const [val,setVal]= useState("kaushik")
    const test = (e)=>{
        console.warn("test function",e.target.value)
        setVal(e.target.value)
    }

    return(
        <div>
            <h1>
            Contact us component
            </h1>
            <input type="text" value={val} onChange={test} />
            <button onClick={()=>alert(val)}>Click me</button>
       
        </div>
    )
}
export default Contact;