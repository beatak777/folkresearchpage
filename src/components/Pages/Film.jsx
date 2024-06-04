import React from 'react';

function Film() {
  return (
    <div className="container" style={{ textAlign: 'left' }}>
      <h1>Threads of Eternity</h1>
   
      <div className="film-content" style={{ display: 'flex', alignItems: 'flex' }}>
        <img 
          src="https://tapoutgoldsmiths24.com/assets/ThreadsOfEternityImage.c4c73295.png" 
          alt="Threads of Eternity" 
          style={{ maxWidth: "30.2%", height: "auto" }} // Set max-width to 100%
        />
        <div style={{ marginLeft: '20px' }}>
          <h2></h2>
          <p>This page is dedicated to inform you about my final project short film. Scroll down to look at specific filming locations in connection to folklore and learn about their magical stories.</p>
          <p>
            Threads of Eternity follows Ilona, the protagonist unravelling past lives through meditation, spurred by a mysterious symbol. Three pivotal memories emerge, marked by a diminishing red thread, symbolizing hope and interconnectedness. The film blends elements of mystery and self-discovery, drawing inspiration from the red thread legend and spiritual beliefs around it. Visual storytelling intertwines with themes of reincarnation, personal transformation, and hope. Threads of Eternity showcases Beata Konya's creative vision and research into folklore, delving into the premises of past lives and their connection to the present.
          </p>
          <p>
      The nearly eight minutes long short film was captured with an iPhone 13 Mini and additionally there were two drone footages were used from the Ramon Crater. It took me and my team to film everything in two months and the editing happened for a three months period prior to our festival screening. The research began as a quest for an autobiographical love story that connects through time and space, yet somehow the story did not feel aligned. Then I found a folklore about a Golden Thread, where the protagonist weaves the thread until her lover arrives back home from captivity. This story from Elek Benedek guided me towards the outcome of the final storyline of the movie.
          </p>
          <p>
            The protagonist's name 'Ilona' means fairy,and is a symbol of hope and magic. She often appears in Hungarian folktales. The name choice was inspired by my ancestor Ilona Mayer, who initially appeared in my dreams when I started the process of making the movie plot.
          </p>
       
        </div>
      </div>
      <div className="location-content" style={{ textAlign: 'left' }}>
        <h2>Filming Locations</h2>
        <div className="location" style={{ display: 'flex', alignItems: 'flex-start' }}>
          <img 
            src="https://cdn.elebase.io/173fe953-8a63-4a8a-8ca3-1bacb56d78a5/57a57df1-3011-433a-9a41-aec2de8ffa68-72_01-hercegkutgomoscellars_viktorkiss.jpg?w=1000&h=500&fit=crop&q=75"
            alt="Hercegkut"
            style={{ maxWidth: "30%", height: "auto", marginRight: '20px' }}
          />
          <div>
            <h3 style={{ marginTop: 0 }}>Hercegkut</h3>
            <p>Hercegkut, in Hungary renowned for its ancient cellars and picturesque landscapes, emerges as a captivating backdrop for cinematic storytelling. The decision to feature Hercegkut was not merely based on its aesthetic appeal but also on the palpable sense of magic that permeates its surroundings. In choosing Hercegkut, I sought to transport viewers to a realm where the mundane transcends into the extraordinary, echoing the timeless allure of the red thread and its profound significance within the tapestry of human experience.
            </p>
            <a href="https://visitworldheritage.com/en/eu/world-heritage-cellars-of-hercegk%C3%BAt/951c98e8-839f-4e25-aea5-3feafe0dfdd5" target="_blank" rel="noopener noreferrer">Learn more about Hercegkut</a>
          </div>
        </div>
        <div className="location" style={{ display: 'flex', alignItems: 'flex-start' }}>
          <img 
            src="https://www.historyhit.com/app/uploads/bis-images/5155158/shutterstock_1687566199-1576x1074.jpg"
            alt="Boldogko Castle"
            style={{ maxWidth: "30%", height: "auto", marginRight: '20px' }}
          />
          <div>
            <h3 style={{ marginTop: 0 }}>Boldogko Castle</h3>
            <p>
            Boldogko Castle, in Hungary is a medieval bastion steeped in a tapestry of historical intrigue. Its formidable walls echo with the whispers of bygone eras, adding a layer of depth to the atmospheric fabric of my film. Yet, beyond its tangible history lies a realm of folklore and legend, notably the tale of the seven fairies whose ethereal hands are said to have shaped its very foundations. This enchanting narrative intertwines with the castle's stone walls, enriching the cinematic experience with a sense of mystique and wonder. In embracing Boldogko Castle as a setting, I not only pay homage to its tangible history but also invite viewers to delve into the realm of myth and magic that dances within its ancient halls.
            </p>
            <a href="https://www.historyhit.com/locations/boldogko-castle/" target="_blank" rel="noopener noreferrer">Learn more about Boldogko Castle</a>
          </div>
        </div>
        <div className="location" style={{ display: 'flex', alignItems: 'flex-start' }}>
          <img 
            src="https://media.timeout.com/images/105990985/1372/772/image.webp"
            alt="Mitzpe Ramon Crater"
            style={{ maxWidth: "30%", height: "auto", marginRight: '20px' }}
          />
          <div>
            <h3 style={{ marginTop: 0 }}>Mitzpe Ramon Crater</h3>
            <p>
            Mitzpe Ramon Crater, nestled in Israel, stands as a geological marvel of unparalleled beauty and spiritual resonance. Its landscape, shaped by millennia of natural forces, exudes an otherworldly aura, making it an ideal backdrop for pivotal scenes in my film. While Safed holds the historical origins of Kabbalah, it was the enigmatic allure and mystical energies emanating from Mitzpe Ramon that beckoned me. This decision was not merely geographical but deeply intuitive, as if the very essence of the crater whispered secrets that aligned with the essence of my story. In choosing Mitzpe Ramon, I embraced not just a filming location, but a conduit for the spiritual dimensions my narrative sought to explore.
            </p>
            <a href="https://www.timeout.com/israel/attractions/ramon-crater" target="_blank" rel="noopener noreferrer">Learn more about Mitzpe Ramon Crater</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Film;

