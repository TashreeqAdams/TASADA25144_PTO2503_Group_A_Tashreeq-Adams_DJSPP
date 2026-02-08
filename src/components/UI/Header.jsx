import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Header() {
  // const navigate = useNavigate();

  // const handleNavigate = () => {
  //   navigate()
  // }

  return (
    <header className={styles.appHeader}>
      <h1>
        {" "}
        <Link to="/">🎙️ Podcast App</Link>
      </h1>
      <div className={styles.pages}>
        <p>
          {" "}
          <Link to="/">Home</Link>
        </p>
        <p>
          {" "}
          <Link to="/favourites">Favourites</Link>
        </p>
      </div>
    </header>
  );
}
