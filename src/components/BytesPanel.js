import React from 'react';
import PropTypes from 'prop-types';

function BytesPanel(props) {
  return (
    <React.Fragment>
      <h2>{props.bytes} {props.bytesMeasurement}</h2>
    </React.Fragment>
  )
}

BytesPanel.propTypes = {
  bytes: PropTypes.func,
  mineBytes: PropTypes.func,
}

export default BytesPanel;