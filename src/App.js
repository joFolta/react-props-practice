import React from "react"
import Joke from "./Joke.js"
import jokesData from "./jokesData.js"

function App(){
    const jokeComponents = jokesData.map(joke => 
        <Joke key={joke.id} question={joke.question} answer={joke.answer}/>
    )
    console.log(jokeComponents)
    return(
        <div>
            {jokeComponents}
        </div>
    )
}

export default App