import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Inicio from './Inicio';
import SeriesPage from './SeriesPage';
import MoviesPage from './MoviesPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Importa Provider
import store from './store/store'; // Importa tu store de Redux

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} /> 
        <Route path="/series" element={<SeriesPage />} /> 
        <Route path="/movies" element={<MoviesPage />} /> 
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);
