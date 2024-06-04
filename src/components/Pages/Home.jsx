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
            Welcome to our exploration of reincarnation folklore and theatre. This project delves into the rich tapestry of reincarnation myths from various cultures and their vibrant representations in theatre.
          </p>
          <a href="#overview" className="cta-button">Start Your Journey</a>
        </div>
      </div>

      <section id="overview" className="features-section">
        <h2>Key Features</h2>
        <div className="features">
          <div className="feature">
            <img src="path/to/folklore-icon.png" alt="Folklore" className="feature-icon" />
            <h3>Reincarnation in Folklore</h3>
            <p>Discover the diverse tales of rebirth and transformation.</p>
          </div>
          <div className="feature">
            <img src="path/to/theatre-icon.png" alt="Theatre" className="feature-icon" />
            <h3>Theatrical Interpretations</h3>
            <p>Explore plays and performances inspired by reincarnation themes.</p>
          </div>
          <div className="feature">
            <img src="path/to/scholar-icon.png" alt="Scholar" className="feature-icon" />
            <h3>Scholarly Insights</h3>
            <p>Read in-depth analyses and expert opinions.</p>
          </div>
          <div className="feature">
            <img src="path/to/interactive-icon.png" alt="Interactive" className="feature-icon" />
            <h3>Digital Folktales in English</h3>
            <p>Discover the magic of Hungarian Folktales through digital adaptations.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

