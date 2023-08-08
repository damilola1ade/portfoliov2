import React from 'react'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import './Footer.scss'

const Footer = () => {

    return (
        <>
            <h2 className='head-text'>Let's Chat</h2>

            <div className='app__footer-cards'>
                <div className='app__footer-card '>
                    <img src={images.email} alt='email' />
                    <a href='damiiyi@gmail.com' className='p-text'>
                        damiiyi@gmail.com
                    </a>
                </div>
                <div className='app__footer-card'>
                    <img src={images.mobile} alt='phone' />
                    <a href='+234 813 848 6922' className='p-text'>
                        +234 813 848 6922
                    </a>
                </div>
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg'
)
