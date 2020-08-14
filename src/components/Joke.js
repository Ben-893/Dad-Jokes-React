import React, { useState, useEffect } from "react";
import axios from "axios";
import sound from '../laughter.mp3';

export default function Joke() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      })
      .then((res) => setJoke(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    fetchJoke();
    playSound();
  };

  const playSound = () => {
    let audio = new Audio(sound)
    audio.play()
  }

  const fetchJoke = () => {
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      })
      .then((res) => setJoke(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="mt-4">
      <div className="card">
        <div className="card-header">Dad Joke</div>
        <div className="card-body">
          <p className="card-text">{joke.joke}</p>
          <button className="btn btn-primary text-white" onClick={handleClick}>
            Get Another Joke
          </button>
        </div>
      </div>
    </div>
  );
}
