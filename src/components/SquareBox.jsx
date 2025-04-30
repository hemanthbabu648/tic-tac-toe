import React from 'react'

const SquareBox = ({value, onClick}) => {
  return (
    <button type="button" className='square' onClick={onClick}>{value}</button>
  );
};

export default SquareBox;