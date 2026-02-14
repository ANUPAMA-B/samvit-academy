import React from 'react';

const ACHIEVEMENTS = [
  { img: '/images/img5.jpg' },
  { img: '/images/img6.jpg' },
  { img: '/images/img10.jpg' },
];

const Achievements = () => (
  <div className="page page-achievements">
    <section className="page-hero">
      <div
        className="page-hero-bg"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/4261795/pexels-photo-4261795.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
        }}
      />
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <h1 className="page-hero-title">Achievements</h1>
        <p className="page-hero-tagline">Student progress & competition selections</p>
      </div>
    </section>

    <section className="content-band">
      <div className="container">
        <div className="row g-4">
          {ACHIEVEMENTS.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="img-card img-card--tall">
                <img
                  src={item.img}
                  alt="Achievement"
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    backgroundColor: '#f5f5f5'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Achievements;
