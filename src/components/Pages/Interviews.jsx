import React from 'react';

function Interviews() {
  return (
    <div className="container">
      <h1>Interviews</h1>
      <p>Welcome to our interviews page! Here you can find interviews with industry experts.</p>
      <div className="video-container">
        {/* First Interview */}
        <iframe
          title="First Interview"
          width="560"
          height="315"
          src="https://drive.google.com/file/d/1kDb4E55wtmGrF-hbUrfm3eyU5_qxeTp9/view?usp=drive_link"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        {/* Second Interview */}
        <iframe
          title="Second Interview"
          width="560"
          height="315"
          src="https://drive.google.com/file/d/VIDEO_ID_2/preview"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        {/* Third Interview */}
        <iframe
          title="Third Interview"
          width="560"
          height="315"
          src="https://drive.google.com/file/d/VIDEO_ID_3/preview"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        {/* Fourth Interview */}
        <iframe
          title="Fourth Interview"
          width="560"
          height="315"
          src="https://drive.google.com/file/d/VIDEO_ID_4/preview"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Interviews;
