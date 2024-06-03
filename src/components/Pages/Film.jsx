import React from 'react';

function Film() {
  return (
    <div className="container">
      <h1>Film</h1>
      <p>Welcome to our film page! Here you can find information about our latest films.</p>
      <div className="film-content">
        <h2>Threads of Eternity</h2>
        <img 
          src="https://tapoutgoldsmiths24.com/assets/ThreadsOfEternityImage.c4c73295.png" 
          alt="Threads of Eternity" 
          style={{ maxWidth: "30%", height: "auto" }} // Set max-width to 100%
        />
        <p>
          Threads of Eternity follows Ilona, the protagonist unravelling past lives through meditation, spurred by a mysterious symbol. Three pivotal memories emerge, marked by a diminishing red thread, symbolizing hope and interconnectedness. The film blends elements of mystery and self-discovery, drawing inspiration from the red thread legend and spiritual beliefs around it. Visual storytelling intertwines with themes of reincarnation, personal transformation, and hope. Threads of Eternity showcases Beata Konya's creative vision and research into folklore, delving into the premises of past lives and their connection to the present.
        </p>
        <p>
          Content warning: Contains scenes depicting hanging and sensitive topics such as miscarriage.
        </p>
      </div>
    </div>
  );
}

export default Film;
