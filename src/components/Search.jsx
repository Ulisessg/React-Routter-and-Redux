import React from 'react';
import '../assets/styles/components/Search.scss';
import className from 'classnames';

const Search = ({ isHome }) => {
  const inputStyle = className('input', {
    isHome
  });
  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres leer hoy?</h2>

    </section>
  );
}

export default Search;