import React from 'react';
import profile from '../../assets/images/about/profile.jpg'
import {CodeSlash, RocketTakeoff, Award} from 'react-bootstrap-icons'
import EssamAbdullah from '../about/Essam_Abdullah_CS_Specialist_CV.pdf'

export const About = () => {
  return (
    <section className='about' id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='about-me'>
              <h2>Brief About Me</h2>
              <div className='essam'>
                <div className='my-pic'>
                  <img src={profile} alt='Essam Abdullah' />
                </div>
                <div className='info'>
                  <div className='about-boxes'>
                    <div className='about-box'>
                      <CodeSlash size={25} />
                      <p>Completed</p>
                      <span>+30 Projects</span>
                    </div>
                    <div className='about-box'>
                    <RocketTakeoff size={25} />
                      <p>Experience</p>
                      <span>4 Years</span>
                    </div>
                    <div className='about-box'>
                      <Award size={25}/>
                      <p>Certificates</p>
                      <span>+30 here</span>
                    </div>
                  </div>
                  <div className='about-description'>
                  <p> I’m Essam, a developer at the intersection of Interactive Design
                    and Intelligent Systems.
                    Armed with an Intermediate Professional Diploma in Computer Science from KFU (4.77 GPA)
                    and 4+ years of digital expertise,
                    I deliver AI-augmented solutions rather than just interfaces.
                    From high-performance Web Frontends to seamless Cross-Platform Mobile apps,
                    my portfolio spans 30+ projects where clean code meets smart logic. </p>
                </div>
                <div className='about-link'>
                  <a download={EssamAbdullah} href={EssamAbdullah}>CV Download</a>
                  <a href='https://github.com/x39OME'>Github</a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
