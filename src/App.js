import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const getLaunchJson = async () => {
    const launchUrl = "https://api.spacexdata.com/v5/launches/query";
    const launchBody = {
      "query": {
        "upcoming": true
      },
      "options": {
        "limit": 5,
        "sort": {
          "flight_number": "asc"
        },
        "populate": ["launchpad"]
      }
    }

    const options = {
      headers: {
        Accept: "application/json", "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(launchBody)
    }

    const response = await fetch(launchUrl, options)
    const responseJson = await response.json();
    console.log(responseJson.docs);
  }

  useEffect(() => {
   getLaunchJson();
  });

  return (
    <div className="LaunchTimer">
      <p>
        HI
      </p>
    </div>
  );
}

export default App;
