import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        src={`https://robohash.org/${id}?size=200x200`}
        alt="profile robot"
      />
      <div className="tc">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string
};

export default Card;
