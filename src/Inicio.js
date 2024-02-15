import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addMovie } from './actions/actions';
import styles from "./App.module.css";
import Footer from "./footer";
import '@fortawesome/fontawesome-free/css/all.css';

function Inicio() {
  const [showFooter, setShowFooter] = useState(false);
  const movies = useSelector(state => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddMovie = () => {
    dispatch(addMovie({ id: 1, title: 'pelicula agregada ' }));
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.demoHeader}>
          <div className={styles.demoTitle}>
            <h1>DEMO Streaming</h1>
          </div>
          <div className={styles.demoActions}>
            <div className={styles.loginContainer}>
              <p className={styles.loginText}>Login</p>
            </div>
            <div className={styles.freeTrial}>Start your Free trial</div>
          </div>
        </div>
        <div className={styles.popularHeader}>
          <h3 className={styles.popularTitle}>Popular Titles</h3>
        </div>
      </header>
      <main>
        <div className={styles.blocksContainer}>
          <div className={styles.block}>
            <Link to="/series" className={styles.seriesLink}>
              <h2 className={styles.blockTitle}>Popular Series</h2>
            </Link>
          </div>
          <div className={styles.block}>
            <Link to="/movies" className={styles.moviesLink}>
              <h2 className={styles.blockTitle}>Popular Movies</h2>
            </Link>
          </div>
        </div>
        <div>
          <h2>Lista de peliculas jej</h2>
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
          <button onClick={handleAddMovie}>Agregar pelicula</button>
        </div>
      </main>
      {showFooter && <Footer />}
      <Footer />
    </div>
  );
}

export default Inicio;
