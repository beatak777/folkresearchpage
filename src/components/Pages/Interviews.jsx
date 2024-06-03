import React from 'react';

function Interviews() {
  // Helper function to convert Google Drive links to embeddable URLs
  const getEmbeddableUrl = (originalUrl) => {
    // Extract the file ID from the Google Drive link
    const fileId = originalUrl.match(/\/file\/d\/(.+?)\/(?:view|edit)?/)?.[1];
    if (fileId) {
      // Construct the embeddable URL
      return `https://drive.google.com/file/d/${fileId}/preview`;
    } else {
      return null; // Invalid or unsupported URL format
    }
  };

  return (
    <div className="container">
      <h1>Interviews</h1>
      <p>Welcome to our interviews page! Here you can find interviews with industry experts.</p>
      <div className="video-container">
        {/* First Interview */}
        <div>
          <h2>First Interview</h2>
          <iframe
            title="First Interview"
            width="560"
            height="315"
            src={getEmbeddableUrl("https://drive.google.com/file/d/1kDb4E55wtmGrF-hbUrfm3eyU5_qxeTp9/view?usp=drive_link")}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Second Interview */}
        <div>
          <h2>Second Interview</h2>
          <iframe
            title="Second Interview"
            width="560"
            height="315"
            src={getEmbeddableUrl("https://drive.google.com/file/d/1D3F3J84e8vHgyM97dPaMIVPa0oYUQXRJ/view?usp=drive_link")}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Third Interview */}
        <div>
          <h2>Third Interview</h2>
          <iframe
            title="Third Interview"
            width="560"
            height="315"
            src={getEmbeddableUrl("https://drive.google.com/file/d/1qYVxVNy_IWv-asCgUhqoGuoyPPsKsqWt/view?usp=sharing")}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Fourth Interview */}
        <div>
          <h2>Fourth Interview</h2>
          <iframe
            title="Fourth Interview"
            width="560"
            height="315"
            src={getEmbeddableUrl("https://drive.google.com/file/d/1hApLCCN0AunR8y7H1UhJ6dLrKSsozHJ8/view?usp=sharing")}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Interviews;

