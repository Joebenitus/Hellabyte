import React from 'react';
import PropTypes from 'prop-types';

function TypeUpgradesPanel(props) {
  return (
    <>
      <h2>Upgrade Bytes Per Click</h2>
      <p>Double your bytes per click!</p>
      <button onClick={props.onClickHandler}>Cost: {props.cost}</button>
    </>
  )
}

TypeUpgradesPanel.propTypes = {
  onClickHandler: PropTypes.func,
  cost: PropTypes.string
}


export default TypeUpgradesPanel;