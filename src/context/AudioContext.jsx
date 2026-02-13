import { createContext, useContext, useState, useEffect } from "react";

const AudioContext = createContext();

export function AudioProvider({ children }) {
  const [activeEpisode, setActiveEpisode] = useState(null);

  const playEpisode = (episode) => {
    setActiveEpisode(episode);
  };

  const stopEpisode = () => {
    setActiveEpisode(null);
  };

  // 🔥 Confirm before leaving if audio is playing
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (activeEpisode) {
        event.preventDefault();
        event.returnValue = ""; // Required for Chrome
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [activeEpisode]);

  return (
    <AudioContext.Provider value={{ activeEpisode, playEpisode, stopEpisode }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}
