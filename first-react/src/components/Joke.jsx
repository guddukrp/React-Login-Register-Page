 export default function Joke(props){
    console.log(props);
    return (

        <>
        <h3>{props.setup}</h3>
        <p>{props.punchline}</p>
        </>
    );
    
}
