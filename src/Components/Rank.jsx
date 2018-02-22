import React from 'react';
import PropTypes from 'prop-types';

const Rank = (props) => {
  const { x, y } = props.position;

  const rectId = `rect${props.player.rank}`;
  const clipId = `clip${props.player.rank}`;

  const pictureStyle = {
    height: 60,
    width: 60,
  };

  const textStyle = {
    fontFamily: '"Joti One" cursive',
    fontSize: 35,
    fill: (props.player.currentPlayer ? '#e9ea64' : '#e3e3e3'),
    cursor: 'default',
  };

  const pictureProperties = {
    style: pictureStyle,
    x: x - 140,
    y: y - 40,
    href: props.player.picture,
    clipPath: `url(#${clipId})`,
  };

  const frameProperties = {
    width: 55,
    height: 55,
    rx: 30,
    x: pictureProperties.x,
    y: pictureProperties.y,
  };

  return (
    <g>
      <defs>
        <rect id={rectId} {...frameProperties}/>
        <clipPath id={clipId}>
          <use xlinkHref={`#${rectId}`} />
        </clipPath>
      </defs>
      <use xlinkHref={`#${rectId}`} strokeWidth="2" stroke="black" />
      <text filter="url(#shadow)" style={textStyle} x={x-200} y={y}>
        {props.player.rank}º
      </text>
      <image {...pictureProperties} />
      <text filter="url(#shadow)" style={textStyle} x={x-60} y={y}>
        {props.player.name}
      </text>
      <text filter="url(#shadow)" style={textStyle} x={x+350} y={y}>
        {props.player.maxScore}
      </text>
    </g>
  );
};

Rank.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  player: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rank: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    maxScore: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    currentPlayer: PropTypes.bool.isRequired,
  }).isRequired,
}

export default Rank;