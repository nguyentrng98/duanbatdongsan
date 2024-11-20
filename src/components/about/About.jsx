import React from 'react';
import './about.css';
import Back from '../common/Back';
import img from "../images/about.jpg"
import Heading from '../common/Heading';

function About() {
  return (
    <>
      <section className='about'>
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam labore rerum quidem ratione
              soluta laborum possimus sunt tenetur adipisci, corporis mollitia? Architecto mollitia veniam
              voluptas sed obcaecati, dolor quae placeat.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam labore rerum quidem ratione
              soluta laborum possimus sunt tenetur adipisci, corporis mollitia? Architecto mollitia veniam
              voluptas sed obcaecati, dolor quae placeat.</p>

            <button className='btn2'>More About Us</button>

          </div>
          <div className='right row'>
            <img src='./immio1.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About