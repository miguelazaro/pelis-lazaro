import React from 'react';
import styles from './MovieCard.module.css';

function MovieCard({ movie }) {
    return (
        <li className={styles.movieCard}>
            <img
                className={styles.movieImage}
                src={`https://image.tmdb.org/t/p/w500/${movie.url}`}
                alt={movie.title}
            />
            <div className={styles.overlay}>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
            </div>
        </li>
    );
}

export { MovieCard };
