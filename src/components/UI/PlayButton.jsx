import "react-h5-audio-player/lib/styles.css";
import styles from "./PlayButton.module.css";

export default function PlayButton({ onPlay }) {
  return (
    <button className={styles.playButton} onClick={onPlay}>
      ▶
    </button>
  );
}
