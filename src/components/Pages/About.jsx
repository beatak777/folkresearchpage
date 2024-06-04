import React from 'react';
import { FaInstagram, FaImdb, FaAmazon, FaEnvelope, FaAddressCard } from 'react-icons/fa';

const About = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const textContainerStyle = {
    textAlign: 'center',
    marginTop: '20px',
  };

  const paragraphStyle = {
    textAlign: 'left',
    lineHeight: '1.6',
    marginBottom: '20px',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '290px',
    height: 'auto',
    marginBottom: '20px',
  };

  const linkStyle = {
    display: 'block',
    marginBottom: '10px',
    textDecoration: 'none',
    color: 'inherit',
    textAlign: 'left',
  };

  const contactStyle = {
    textAlign: 'left',
    marginTop: '20px',
  };

  const socialMediaContainerStyle = {
    marginTop: '20px',
    textAlign: 'center',
  };

  const iconStyle = {
    marginRight: '5px',
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="mb-4" style={{ textAlign: 'center' }}>About Me</h1>
          <div style={containerStyle}>
            <img
              src="https://res.cloudinary.com/spotlightuk/image/upload/e_sharpen:62,q_auto:best,c_limit,fl_keep_attribution,w_2580/v3/remote_media_prodaws/c19c4dcd-6398-4fa8-b2d8-fdeb7025c70e"
              alt="Beata Konya"
              style={imageStyle}
            />
            <div style={textContainerStyle}>
              <p style={paragraphStyle}>
                My name is Beata Konya. I am a 28-year-old Hungarian actress and student at Goldsmiths, University of London. For my final project, I conducted my research about folklore, specifically exploring folktales in connection to the cycle of life and theatre.
              </p>
              <p style={paragraphStyle}>
                My research journey led me to delve into the rich tapestry of Hungarian folklore, where I discovered the intricate nuances of traditional folktales and their profound relevance to contemporary theatrical practices. Through my studies, I explored themes of identity, tradition, and storytelling, drawing inspiration from both academic discourse and personal experiences.
              </p>
              <p style={paragraphStyle}>
                As an actress, I am passionate about bringing stories to life on stage as well as on films, and my exploration of folklore has deepened my understanding of the power of narrative and its transformative impact on individuals and communities. Through my work, I strive to celebrate the cultural heritage of my homeland while embracing the universal themes that resonate across borders and generations.
              </p>
              <p style={paragraphStyle}>
                Join me on this journey of discovery as we unravel the threads of folklore and illuminate the timeless wisdom woven into the fabric of human experience.
              </p>
            </div>
          </div>
          <div style={socialMediaContainerStyle}>
            <a href="https://app.spotlight.com/8135-0194-0848" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <FaAddressCard style={iconStyle} /> Spotlight Profile
            </a>
            <a href="https://instagram.com/earthempath47" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <FaInstagram style={iconStyle} /> Instagram
            </a>
            <a href="https://www.imdb.com/name/nm9850713/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <FaImdb style={iconStyle} /> IMDb Profile
            </a>
            <a href="https://www.amazon.co.uk/SCRATCHES-TRANSITION-SOUL-Beata-Konya/dp/B08F7Y6VTM/ref=sr_1_1?dib=eyJ2IjoiMSJ9.fa5T6P9L9Pk2Bp0XHSvS1w.CkD1bGQTZ9arl_spWkOngc_TX7G2vNsZiCrFwl_k6hE&dib_tag=se&keywords=scratches+aka+the+transition+of+the+soul&qid=1717501786&sr=8-1" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <FaAmazon style={iconStyle} /> Book: Scratches Aka The Transition of Soul
            </a>
            <div style={contactStyle}>
              <h3>Contact Me</h3>
              <a href="mailto:bkony001@gold.ac.uk" style={linkStyle}>
                <FaEnvelope style={iconStyle} /> bkony001@gold.ac.uk
              </a>
            </div>
          </div>
        </div>
     

      </div>
    </div>
  );
};

export default About;
