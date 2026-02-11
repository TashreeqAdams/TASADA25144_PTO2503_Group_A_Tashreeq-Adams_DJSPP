import { Routes, Route } from "react-router-dom";
import Header from "./components/UI/Header";
import Home from "./pages/Home";
import ShowDetail from "./pages/ShowDetail";
import { PodcastProvider } from "./context/PodcastContext";
import FavouritesPage from "./pages/Favourites";

import "bootstrap/dist/css/bootstrap.min.css";
import { FavouritesProvider } from "./context/FavouritesContext";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

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
      <Header />
      <FavouritesProvider>
        <PodcastProvider>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/favourites" element={<FavouritesPage />} />
            <Route path={`/show/:id`} element={<ShowDetail />} />
          </Routes>
        </PodcastProvider>
      </FavouritesProvider>
      <AudioPlayer
        autoPlay
        src="http://example.com/audio.mp3"
        onPlay={(e) => console.log("onPlay")}
        // other props here
      />
    </>
  );
}
