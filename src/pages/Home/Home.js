import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect'
// import Resume from '../../assets/docs/AbhishekOjha.pdf'

const Home = () => {
    return (
        <>
            <div className='container-fluid home-container'>
                <div className='container home-content'>
                    <h2>Hi I'm a</h2>
                    <h1>
                        <Typewriter
                            options={{
                                strings: ['FullStack Developer !', 'MERN Stack Developer !'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <div className='home-buttons'>
                        <button className='btn btn-hire'>Hire Me</button>
                        <a className='btn btn-cv' href='../../assets/docs/AbhishekOjha.pdf' download='AbhishekOjha.pdf'>My Resume</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home