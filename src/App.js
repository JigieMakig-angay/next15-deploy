import { useState, useEffect } from "react";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "Wishing Dead",
      artist: "Blacklite District",
      img_src: "./images/wishing-dead.jpg",
      src: "./music/Wishing Dead.mp3",
    },
    {
      title: "Already Dead",
      artist: "We are fury",
      img_src: "./images/already-dead.jpg",
      src: "./music/Already Dead.mp3",
    },
    {
      title: "Through The Night",
      artist: "Ant Venom",
      img_src: "./images/throught-the-night.jpg",
      src: "./music/Through the night.mp3",
    },
    {
      title: "Unlasting",
      artist: "Lisa",
      img_src: "./images/unlastinglove.jpg",
      src: "./music/unlasting.mp3",
    },
    {
      title: "Call of Silence",
      artist: "Lisa",
      img_src: "./images/callofsilence.jpg",
      src: "./music/callofsilence.mp3",
    },
    {
      title: "Kabaneri",
      artist: "Lisa",
      img_src: "./images/kabaneri.jpg",
      src: "./music/kabaneri.mp3",
    },
    {
      title: "Eighty-Six",
      artist: "Lisa",
      img_src: "./images/eightysix.jpg",
      src: "./music/86.mp3",
    },
    {
      title: "Daylight",
      artist: "David Kushner",
      img_src: "./images/daylight.jpg",
      src: "./music/daylight.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}


export default App;
