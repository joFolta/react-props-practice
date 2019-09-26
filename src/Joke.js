import React from "react"

function Joke(props){
    return (
        <div>
            <h3 style={{display: props.question ? "block":"none"}}>Question: {props.question}</h3>
            <p style={{color: props.question ? "blue":"red"}}>Answer: {props.answer}</p>
            <hr/>
        </div>    
    )
}

export default Joke