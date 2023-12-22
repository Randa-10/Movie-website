import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} color="gold" />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" color="gold" />);
  }

  return <div>{stars}</div>;
};

export default StarRating;
