import React from 'react';
// import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to My Website</h1>
      <p>This is the home page of my website. You can navigate to the videos page using the link below.</p>
      <Link to="/videos" className="nav-link">Go to Videos</Link>
    </div>
  );
};

export default Home;
