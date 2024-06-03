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
        <div className="video-item">
          <h2>First Interview</h2>
          <iframe
            title="First Interview"
            width="560"
            height="315"
            src={getEmbeddableUrl("https://drive.google.com/file/d/1uZzDDRF-jbwKU8uFLM2oSprJvT24lGGs/view?usp=sharing")}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Second Interview */}
        <div className="video-item">
          <h2>Second Interview</h2>
          <iframe
            title="Second Interview"
            width="560"
            height="315"
            src={getEmbeddableUrl("https://drive.google.com/file/d/1xUn0dv4czClc-I_Z_mbj_hwJ_eG88OYp/view?usp=sharing")}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Third Interview */}
        <div className="video-item">
          <h2>Third Interview</h2>
          <iframe
            title="Third Interview"
            width="560"
            height="315"
            src={getEmbeddableUrl("https://drive.google.com/file/d/1m2WCv8436V6UzuQGZ2e3D-RE9D56MqqM/view?usp=sharing")}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Fourth Interview */}
        <div className="video-item">
          <h2>Fourth Interview</h2>
          <iframe
            title="Fourth Interview"
            width="560"
            height="315"
            src={getEmbeddableUrl("https://drive.google.com/file/d/14LqC-HpWAH9jNDz_eRJlCLANPFEmEayO/view?usp=sharing")}
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

