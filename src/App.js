import React, { useState, useEffect } from 'react';
import './App.css';
import LaunchTimer from './components/LaunchTimer';

const App = () => {
  const [docs, setDocs] = useState([]);

  const getLaunchJson = async () => {
    const launchUrl = "https://api.spacexdata.com/v5/launches/query";
    const launchBody = {
      "query": {
        "upcoming": true
      },
      "options": {
        "limit": 1,
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

    setDocs(responseJson.docs);
    return;
  }

  useEffect(() => {
   getLaunchJson();
  }, []);

  return (
    <div className="LaunchTimer">
      <div>
        <LaunchTimer docs = {docs}/>
      </div>
    </div>
  );
}

export default App;
