import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Spinner({ isHidden }) {
  return (
    <Loader
      visible={Boolean(isHidden)}
      type="Watch"
      color="#f50057"
      secondaryColor="green"
      timeout={250}
      height={100}
      width={100}
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
      }}
    />
  );
}
