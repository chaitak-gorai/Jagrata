import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GooglePlay from '../assets/images/google-play-logo.jpg'
import ApplePlay from '../assets/images/apple.png'
import Logo from '../assets/images/logo.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
    <div className='footer py-16' >
        <Container fluid='sm'>
      <Row>
      <Col sm={6}>
        <div className='bg-white w-24 h-24'>
        <Image className='w-24 h-24'  src={Logo} />
        </div>
        <div className="w-60 h-32">      
              <Image className="w-20 h-16 mr-6" src={GooglePlay} />
              <Image className="w-20 h-16" src={ApplePlay} />
            </div>
      </Col>
        <Col sm={3}>
           <h2 className={`text-[white] font-semibold text-lg text-uppercase`} >Company</h2>
           <ul className='p-0 list-none'>
                <li className='py-3'><a href='#' className='text-black text-sm font-regular'>Blog</a></li>
                <li className='py-3'><a href='#' className='text-black text-sm font-regular'>Privacy & Policy</a></li>
                <li className='py-3'><a href='#' className='text-black text-sm font-regular'>Term & Conditions</a></li>
                <li className='py-3'><a href='#' className='text-black text-sm font-regular'>Become our Store Partner</a></li>
                <li className='py-3'><a href='#' className='text-black text-sm font-regular'>Join our Delivery Team</a></li>
            </ul>
        </Col>
        <Col sm={3}>
            <h2 className={`text-[white] font-semibold text-lg  text-uppercase`} >Link</h2>
            <ul className='p-0 list-none'>
                <li className='py-3'><a href='#' className='text-black text-sm font-regular'>About Us</a></li>
                <li className='py-3'><a href='#' className='text-black text-sm font-regular'>Contact Us</a></li>
                <li className='py-3'><a href='#' className='text-black text-sm font-regular'>Cookies</a></li>
                <li className='py-3'><a href='#' className='text-black text-sm font-regular'>Newsletter</a></li>
            </ul>
        </Col>
      </Row>
    </Container>
    </div>
    <div className='bg-white text-center'>
    <p className='text-black-600 text-sm font-medium py-6'>©2022 GravityBites. All rights reserved Catnyx Digital Media</p>
    </div>
    </div>
  )
}

export default Footer