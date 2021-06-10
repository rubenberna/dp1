import React from 'react'
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import { colors } from '../../consts/home/card.consts';

export const CardDataTool = ({metadata, color}) => {
  const history = useHistory()

  const navigate = () => {
    if (metadata) {
      history.push(metadata.slug)
    }
  }

  const cardColor = Object.values(colors)[Math.floor(Math.random() * Object.keys(colors).length)]
  console.log(cardColor);

  if (metadata) {
    return (
      <div className="card" style={{ border: `3px solid ${color}`, color}} onClick={navigate}>
        <span className="card-title">{metadata.title}</span>
        <span className="card-description">{metadata.description}</span>
      </div>
    )
  }

  return 'No metadata provided'
}

CardDataTool.propTypes = {
  metadata: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    slug: PropTypes.string
  })
}
