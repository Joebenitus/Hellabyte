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
      <StyledP>Owned: {props.owned}</StyledP>
      <StyledP>+{props.bytesPerSecond} per second</StyledP>
      <StyledP className='clickable' onClick={props.onClickHandler}>Cost: {props.cost}</StyledP>
    </ComponentStyleWrapper>
  )
}

AutoUpgrade.propTypes = {
  name: PropTypes.string,
  bytesPerSecond: PropTypes.string  ,
  cost: PropTypes.number,
  description: PropTypes.string,
  owned: PropTypes.number,
  onClickHandler: PropTypes.func
}

export default AutoUpgrade;