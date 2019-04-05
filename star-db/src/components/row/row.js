import React from 'react';

const Row = ({right, left }) => {
  return (
    <div className="row mb3 people-page">
      <div className="col-md-6">
        { right }
      </div>
      <div className="col-md-6">
        { left }
      </div>
    </div>
  )
}

export default Row;