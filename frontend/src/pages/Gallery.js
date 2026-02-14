import React from 'react';

const images = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg',
  '/images/img4.jpg',
  '/images/img7.jpg',
  '/images/img8.jpg'
];

const Gallery = () => (
  <div className="page page-gallery">
    <section className="page-hero page-hero--short">
      <div
        className="page-hero-bg"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/4261795/pexels-photo-4261795.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
        }}
      />
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <h1 className="page-hero-title">Gallery</h1>
        <p className="page-hero-tagline">Learning environment & activities</p>
      </div>
    </section>

    <section className="content-band">
      <div className="container py-4">
        <div className="gallery-grid">
          {images.map((src, idx) => (
            <figure className="gallery-item" key={idx}>
              <div
                className="gallery-image-wrapper"
                style={{
                  height: '350px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  className="gallery-image"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Gallery;
