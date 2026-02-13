import { Routes, Route } from "react-router-dom";
import Header from "./components/UI/Header";
import Home from "./pages/Home";
import ShowDetail from "./pages/ShowDetail";
import { PodcastProvider } from "./context/PodcastContext";
import FavouritesPage from "./pages/Favourites";

import "bootstrap/dist/css/bootstrap.min.css";
import { FavouritesProvider } from "./context/FavouritesContext";
import { ThemeProvider } from "next-themes";
import { AudioProvider, useAudio } from "./context/AudioContext";
import AudioPlayer from "react-h5-audio-player";

/**
 * Root component of the Podcast Explorer app.
 *
 * - Wraps the application in the `PodcastProvider` context for global state.
 * - Includes the `Header` component, displayed on all pages.
 * - Defines client-side routes using React Router:
 *    - "/" renders the `Home` page
 *    - "/show/:id" renders the `ShowDetail` page for a specific podcast
 *
 * @returns {JSX.Element} The application component with routing and context.
 */
export default function App() {
  return (
    <>
      <AudioProvider>
        <FavouritesProvider>
          <PodcastProvider>
            <ThemeProvider>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/favourites" element={<FavouritesPage />} />
                <Route path={`/show/:id`} element={<ShowDetail />} />
              </Routes>
              <GlobalAudioPlayer />
            </ThemeProvider>
          </PodcastProvider>
        </FavouritesProvider>
      </AudioProvider>
    </>
  );
}

function GlobalAudioPlayer() {
  const { activeEpisode } = useAudio();

  console.log("GLOBAL PLAYER STATE:", activeEpisode);

  if (!activeEpisode) return null;

  return (
    <div className="globalPlayer">
      <AudioPlayer
        autoPlay
        src={activeEpisode.file}
        header={`Now Playing: ${activeEpisode.title}`}
      />
    </div>
  );
}
