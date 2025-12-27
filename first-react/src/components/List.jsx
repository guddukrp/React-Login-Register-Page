import Joke from "./Joke";
import jokesdata from "./jokesdata";

function List() {

  const jokelement = jokesdata.map(joke=>{
    return <Joke setup= {joke.setup} punchline = {joke.punchline}/>
  })
  return (
    <>
    {jokelement}
    </>
    
  )
}

export default List;