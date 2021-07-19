import React from 'react';

// Components
import Card from '../Card';

const Player = (props) => {
  return (
    <div className={`player-${props.index}`}>
      <p className="lead">Player Name</p>
      <div className="d-flex">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Player;