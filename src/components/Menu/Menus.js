import React from 'react'
import './Menus.css'
import { FcAbout, FcBiotech, FcContacts, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector, FcVoicePresentation } from 'react-icons/fc'

const Menus = ({ toggle }) => {
    return (
        <>
            {toggle ?
                (
                    <>
                        <div className='navbar-profile-pic'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCczoMDFIc77qVeqtnJ26h8Yen0WXNfyLTIg&usqp=CAU' alt='profile pic' />
                        </div>
                        <div className='nav-items'>
                            <div className='nav-item'>
                                <div className='nav-link'>
                                    <FcHome />Home
                                </div>
                            </div>
                            <div className='nav-item'>
                                <div className='nav-link'>
                                    <FcAbout />About
                                </div>
                            </div>
                            <div className='nav-item'>
                                <div className='nav-link'>
                                    <FcPortraitMode />Work Experience
                                </div>
                            </div>
                            <div className='nav-item'>
                                <div className='nav-link'>
                                    <FcBiotech />Tech Stack
                                </div>
                            </div>
                            <div className='nav-item'>
                                <div className='nav-link'>
                                    <FcReadingEbook />Education
                                </div>
                            </div>
                            <div className='nav-item'>
                                <div className='nav-link'>
                                    <FcVideoProjector />Projects
                                </div>
                            </div>
                            <div className='nav-item'>
                                <div className='nav-link'>
                                    <FcVoicePresentation />Testimonial
                                </div>
                            </div>
                            <div className='nav-item'>
                                <div className='nav-link'>
                                    <FcContacts />Contact
                                </div>
                            </div>
                        </div>
                    </>
                ) :
                (
                    <>
                        <div className='nav-items'>
                            <div className='nav-item'>
                                <div className='nav-link'>
                                    <FcHome title='Home' />
                                </div>
                            </div>
                            <div className='nav-item'>
                                <div className='nav-link'>
                                    <FcAbout title='About' />
                                </div>
                            </div>
                            <div className='nav-item'>
                                <div className='nav-link'>
                                    <FcPortraitMode title='Work Experience' />
                                </div>
                            </div>
                            <div className='nav-item'>
                                <div className='nav-link'>
                                    <FcBiotech title='Tech Stack' />
                                </div>
                            </div>
                            <div className='nav-item'>
                                <div className='nav-link'>
                                    <FcReadingEbook title='Education' />
                                </div>
                            </div>
                            <div className='nav-item'>
                                <div className='nav-link'>
                                    <FcVideoProjector title='Projects' />
                                </div>
                            </div>
                            <div className='nav-item'>
                                <div className='nav-link'>
                                    <FcVoicePresentation title='Testimonial' />
                                </div>
                            </div>
                            <div className='nav-item'>
                                <div className='nav-link'>
                                    <FcContacts title='Contact' />
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Menus