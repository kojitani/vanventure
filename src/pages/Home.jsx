import React from 'react';

export default function Home() {
  return (
    <div className="home-container">
      <img
        className="home-background"
        src="https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg"
      />
      <h1>You got the travel plans, we got the travel vans.</h1>
      <p>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <button className="home-btn">Find your van</button>
    </div>
  );
}
