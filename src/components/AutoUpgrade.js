import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledP = styled.p`
  margin: 1px;
  font-size: 15px;
`;

const ComponentStyleWrapper = styled.section`
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.3);
`

function AutoUpgrade(props) {
  return (
    <ComponentStyleWrapper>
      <h4>{props.name}</h4>
      <StyledP>+{props.bytesPerSecond} per second</StyledP>
      <StyledP>Cost: {props.cost}</StyledP>
    </ComponentStyleWrapper>
  )
}

AutoUpgrade.propTypes = {
  name: PropTypes.string,
  bytesPerSecond: PropTypes.number,
  cost: PropTypes.number,
  description: PropTypes.string
}

export default AutoUpgrade;