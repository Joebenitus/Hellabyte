import React from 'react';
import AutoUpgrade from './AutoUpgrade';
import PropTypes from 'prop-types';

function AutoUpgradesPanel(props) {
  return (
    <>
      <h2>Auto Upgrades</h2>
      <AutoUpgrade name='Spacebar Weight' bytesPerSecond='1 bytes' cost={15} onClickHandler={props.onClickHandler}/>
      <AutoUpgrade name='Online Volunteer' bytesPerSecond='5 bytes' cost={100} onClickHandler={props.onClickHandler}/>
      <AutoUpgrade name='Intern' bytesPerSecond='20 bytes' cost={350} onClickHandler={props.onClickHandler}/>
    </>
  )
}

AutoUpgradesPanel.propTypes = {
  onClickHandler: PropTypes.func
}

export default AutoUpgradesPanel;