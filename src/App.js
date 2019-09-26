import React from "react"
import Joke from "./Joke"

function App(){
    return(
        <div>
            <Joke question="Who are you" answer="Han"/>
            <Joke question="Where are you from?" answer="Boston"/>
            <Joke question="How are you feeling today" answer="Not bad. I skated into work today and am feeling strong and healthy!"/>
            <Joke question="Why do you enjoy the outdoors?" answer="The air is fresh and I love being in touch with nature"/>
            <Joke question="Will you meet me at the zoo next week?" answer="Let's do it! That would be fun."/>
        </div>
    )
}

export default App