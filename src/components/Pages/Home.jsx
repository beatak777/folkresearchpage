import React from 'react';

const Home = () => {
  return (
    <div className="hero-section text-center">
      <div className="overlay">
        <h1 className="title mb-4">The Mystique of Reincarnation: Folklore and Theatre</h1>
        <p className="subtitle">Exploring the Intersection of Myth and Performance</p>
        <img
          src="https://bookshow.blurb.com/bookshow/cache/P5102690/md/cover_2.jpeg?access_key=2f98027ff35a54c96aaba5d74d947450"
          alt="Book Cover"
          className="img-fluid hero-image"
        />
        <div className="mt-4">
          <p>
            Welcome to our exploration of reincarnation folklore and theatre. This page is dedicated to the research that delves into the rich tapestry of reincarnation through myths from the Hungarian culture in the hope to produce a theatre work after the research has been conducted.
          </p>
        
        </div>
      </div>

      <section id="overview" className="features-section">
        
        <div className="features">
          {/* Cultural Studies and Sociology */}
          <div className="feature">
          
           
          </div>
          <div className="feature">
           
          </div>
          
          {/* Encyclopedia and Academic Resources */}
          <div className="feature">
        
     
          </div>
        </div>
      </section>

      <section id="hungarian-folktales" className="features-section">
        <h2>Hungarian Folktales in English</h2>
        <div className="features" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {/* Hungarian Folklore and Ethnography */}
          <div className="feature">
            <a href="https://youtu.be/E-nSlaBmk8g?si=SOhAahKngvi356ew" target="_blank" rel="noopener noreferrer">
              <img src="https://img.youtube.com/vi/E-nSlaBmk8g/0.jpg" alt="The Shepherd Paul" className="feature-icon" />
              <h3>Hungarian Folk Tales: The Water Fairy (S07E04)</h3>
            </a>
            <p>Watch the captivating story of "The Water Fairy."</p>
          </div>
          <div className="feature">
            <a href="https://youtu.be/JiLFlJDxRhw?si=5wt8K4ZltCsIsL8J" target="_blank" rel="noopener noreferrer">
              <img src="https://img.youtube.com/vi/JiLFlJDxRhw/0.jpg" alt="The Tree That Reached the Sky" className="feature-icon" />
              <h3>Hungarian Folk Tales: The Little Puli Dog (S02E09)</h3>
            </a>
            <p>Watch the enchanting tale of "The Little Puli Dog."</p>
          </div>
          <div className="feature">
            <a href="https://youtu.be/hCrvFIJWjv8?si=f7wlj0rVYLelOO9x" target="_blank" rel="noopener noreferrer">
              <img src="https://img.youtube.com/vi/hCrvFIJWjv8/0.jpg" alt="The Coat of Many Colors" className="feature-icon" />
              <h3>Hungarian Folk Tales: Sebastian the Dragon Slayer (S08E03)</h3>
            </a>
            <p>Enjoy the vibrant story of "Sebastian the Dragon Slayer."</p>
          </div>
          <div className="feature">
            <a href="https://youtu.be/a226flenKH8?si=-I2mhJAuJdOeOwRP" target="_blank" rel="noopener noreferrer">
              <img src="https://img.youtube.com/vi/a226flenKH8/0.jpg" alt="The Three Princes and Their Beasts" className="feature-icon" />
              <h3>Hungarian Folk Tales: A Talking Vine, a Smiling Apple, <br /> and a Jingling, Tingling Peach (S08E05)</h3>
            </a>
            <p>Immerse yourself in the adventure of " A Talking Vine, a Smiling Apple, <br /> and a Jingling, Tingling Peach."</p>

            
          </div>
          <div className="feature">
            {/* <a href="https://www.youtube.com/watch?v=a1RrhBF1C9k" target="_blank" rel="noopener noreferrer">
              <img src="" alt="" className="feature-icon" />
              <h3>Hungarian Folk Tales: Seven at One Blow (S06E03)</h3>
            </a>
            <p>Immerse yourself in the adventure of "Seven at One Blow"</p> */}

            
          </div>
        </div>
      </section>
   

    </div>
  );
};

export default Home;

