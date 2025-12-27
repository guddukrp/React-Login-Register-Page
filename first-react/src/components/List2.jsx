import React from 'react';
import reactLogo from '../assets/react.jpg'
import './List2.css'



function Header(){
    return(
        <header>
            <img src={reactLogo} alt="reactLogo" width={300}/>
            <nav >
                <ul className='nav-list'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer(){
    return(
        <footer>
                <p>&copy; 20xx Sutara Developermnt. All rights reserved</p>
               
        </footer>
    )
}

function MainComponent(){
    return (
    <main>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>React is popular library</li>
                <li>I will be able to fit in with all the coolest devs out there</li>
                <li>I am more likely to get a job as a front end developer</li>
                <li>If I know react I can create my own website</li>

            </ol>
            </main>
    )
}


function List2(){
    return(
        <>
            <Header/>
            <MainComponent/>
            <Footer/>
            
        </>
        
    );
}
export default List2;