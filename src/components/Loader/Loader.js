import React from 'react';
import LoaderComponent from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loader}>
      <LoaderComponent
        type="Puff"
        color="#82f4d3"
        height={100}
        width={100}
        // timeout={3000}
      />
    </div>
  );
};

export default Loader;
