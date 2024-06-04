import React from 'react';

const About = () => {
  const paragraphStyle = {
    textAlign: 'left',
    lineHeight: '1.1',
    marginBottom: '20px',
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="mb-4">Folklore Research</h1>
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
    </div>
  );
};

export default About;
