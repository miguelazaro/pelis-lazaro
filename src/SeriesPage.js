
import React, { useState, useEffect } from 'react';
import { MovieCard } from './MovieCard';
import styles from './App.module.css';
import series from './movies.json';
import Footer from './footer';

function SeriesPage() {
  const [loading, setLoading] = useState(true);
  const [showFooter, setShowFooter] = useState(false);

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

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000); 
  }, []);

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
          <h3 className={styles.popularTitle}>Popular Series</h3>
        </div>
      </header>
      {loading ? (
        <div className={styles.loadingBar}>Loading...</div>
      ) : (
        <>
          <main>
            <div className={styles.moviesGrid}>
              {series.map((serie) => (
                <MovieCard key={serie.id} movie={serie} />
              ))}
            </div>
          </main>
          {showFooter && <Footer />}
        </>
      )}
      <Footer />
    </div>
  );
}

export default SeriesPage;
