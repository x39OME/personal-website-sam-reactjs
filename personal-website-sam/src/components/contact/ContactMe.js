import { Col, Row } from 'react-bootstrap';
import navIcon6 from '../../assets/images/social/nav-icon6.svg'
import navIcon7 from '../../assets/images/social/nav-icon7.svg'
import navIcon8 from '../../assets/images/social/nav-icon8.svg'

export const ContactMe = () => {

  return (
      <Col lg={12}>
        <div id='connect' className='contact-me wow slideInUp'>
          <Row>
            <Col md={6} xl={4}>
              <a href='mailto:@outlook.sa'>
                <img src={navIcon7} alt='Email' />
              </a>
              <p>aaa@outlook.sa</p>
            </Col>
            <Col md={6} xl={4}>
              <a href='http://wa.me'>
                <img src={navIcon6} alt='Whats App' />
              </a>
              <p>+966 123 456 789</p>
            </Col>
            <Col md={6} xl={4}>
              <a href='https://www.linkedin.com'>
                <img src={navIcon8} alt='Linkedin' />
              </a>
              <p>Essam</p>
            </Col>
          </Row>
          <div className='shapes'>
            <div className='circle'></div>
            <div className='square'></div>
            <div className='triangle'></div>
          </div>
        </div>
      </Col>
  )
}