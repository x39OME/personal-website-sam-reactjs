import React from 'react';
import profile from '../../assets/images/about/profile.jpg'
import completed from '../../assets/images/about/completed.svg'
import award from '../../assets/images/about/award.svg'
import certificates from '../../assets/images/about/certificates.svg'

export const About = () => {
  return (
    <section className='about' id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='about-me'>
              <h2>About me</h2>
              <div className='essam'>
                <div className='my-pic'>
                  <img src={profile} alt='Essam Abdullah' />
                </div>
                <div className='info'>
                  <div className='about-boxes'>
                    <div className='about-box'>
                      <img src={completed} alt='Complete' />
                      <p>Completed</p>
                      <span>+15 Projects</span>
                    </div>
                    <div className='about-box'>
                      <img src={award} alt='Complete' />
                      <p>Experience</p>
                      <span>4 Years</span>
                    </div>
                    <div className='about-box'>
                      <img src={certificates} alt='Complete' />
                      <p>Certificates</p>
                      <span>+30 here</span>
                    </div>
                  </div>
                  <div className='about-description'>
                  <p> My name is Essam Abdullah, i'm from Jeddah i have a good experience in Computer Science and Data Analytics,
                    with a Professional Diploma of Computer Science from KFU, i'm a Full Stack Web Developer and Mobile Developer,
                    i have more than +15 Projects. </p>
                </div>
                <div className='about-link'>
                  <a href='https://x39ome.github.io/my_resume/'>My resume</a>
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


