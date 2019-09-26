import React from "react"

function Joke(props){
    console.log(props)
    return (
        <div>
            <h3>Question: {props.question}</h3>
            <p>Answer: {props.answer}</p>
            <hr/>
        </div>    
    )
}

export default Joke