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
      <h1 style={{ textAlign: 'center' }}>Interviews</h1>
      <p>Welcome to our interviews page! Here you can find interviews with industry experts.</p>
      <p style={{ textAlign: 'center' }}>Visit the <a href="https://hubarttheatre.wordpress.com" target="_blank" rel="noopener noreferrer">Hubart Theatre WordPress website</a> for more information.</p>
      <div className="video-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* First Interview */}
        <div className="video-item" style={{ maxWidth: '560px', margin: '10px' }}>
          <h2>Interview with Dora Koleseri</h2>
          <iframe
            title="Interview with Dora Koleseri"
            width="100%"
            height="315"
            src={getEmbeddableUrl("https://drive.google.com/file/d/1uZzDDRF-jbwKU8uFLM2oSprJvT24lGGs/view?usp=sharing")}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Second Interview */}
        <div className="video-item" style={{ maxWidth: '560px', margin: '10px' }}>
          <h2>Interview with Blanka Molnar</h2>
          <iframe
            title="Interview with Blanka Molnar"
            width="100%"
            height="315"
            src={getEmbeddableUrl("https://drive.google.com/file/d/1xUn0dv4czClc-I_Z_mbj_hwJ_eG88OYp/view?usp=sharing")}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Third Interview */}
        <div className="video-item" style={{ maxWidth: '560px', margin: '10px' }}>
          <h2>Interview with Aron Kun</h2>
          <iframe
            title="Interview with Aron Kun"
            width="100%"
            height="315"
            src={getEmbeddableUrl("https://drive.google.com/file/d/1m2WCv8436V6UzuQGZ2e3D-RE9D56MqqM/view?usp=sharing")}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Fourth Interview */}
        <div className="video-item" style={{ maxWidth: '560px', margin: '10px' }}>
          <h2>Interview with Peter Noblet</h2>
          <iframe
            title="Interview with Peter Noblet"
            width="100%"
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

