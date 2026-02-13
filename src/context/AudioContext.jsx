import { createContext, useContext, useState } from "react";

const AudioContext = createContext();

export function AudioProvider({ children }) {
  const [activeEpisode, setActiveEpisode] = useState(null);

  const playEpisode = (episode) => {
    setActiveEpisode(episode);
  };

  const stopEpisode = () => {
    setActiveEpisode(null);
  };

  return (
    <AudioContext.Provider value={{ activeEpisode, playEpisode, stopEpisode }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}
