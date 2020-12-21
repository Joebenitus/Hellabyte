import React from 'react';
import PropTypes from 'prop-types';

function BytesPanel(props) {
  return (
    <React.Fragment>
      <h2>{props.bytes}</h2>
      <p>{props.bytesPerClick} per click</p>
    </React.Fragment>
  )
}

BytesPanel.propTypes = {
  bytes: PropTypes.string,
  mineBytes: PropTypes.func,
}

export default BytesPanel;