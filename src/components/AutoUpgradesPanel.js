import React from 'react';
import AutoUpgrade from './AutoUpgrade';
import PropTypes from 'prop-types';
import { getByteMetric } from './GetByteMetric'

function AutoUpgradesPanel(props) {
  const { name, bytesPerSecond, cost, owned, index } = props.autoUpgrades[1];
  return (
    <>
      <h2>Auto Upgrades</h2>
      <AutoUpgrade name={name} bytesPerSecond={getByteMetric(bytesPerSecond)} cost={getByteMetric(cost)} owned={owned} index={1} onClickHandler={props.onClickHandler}/>
      <AutoUpgrade name='Online Volunteer' bytesPerSecond='5 bytes' cost={100} onClickHandler={props.onClickHandler}/>
      <AutoUpgrade name='Intern' bytesPerSecond='20 bytes' cost={350} onClickHandler={props.onClickHandler}/>
    </>
  )
}

AutoUpgradesPanel.propTypes = {
  onClickHandler: PropTypes.func,
  autoUpgrades: PropTypes.object
}

export default AutoUpgradesPanel;