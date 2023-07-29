import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect'
// import Resume from '../../assets/docs/Abhishek_Ojha.pdf'

const Home = () => {
    return (
        <>
            <div className='container-fluid home-container'>
                <div className='container home-content'>
                    <h1>Hi I'm a </h1>
                    <h2>
                        <Typewriter
                            options={{
                                strings: ['FullStack Developer !', 'MERN Stack Developer !'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                    <div className='home-buttons'>
                        <button className='btn btn-hire'>Hire Me</button>
                        <a className='btn btn-cv' href='../../assets/docs/Abhishek_Ojha.pdf' download='Abhishek_Ojha.pdf'>My Resume</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home