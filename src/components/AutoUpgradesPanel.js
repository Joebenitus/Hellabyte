import React from 'react';
import AutoUpgrade from './AutoUpgrade';

function AutoUpgradesPanel(props) {
  return (
    <>
      <h2>Auto Upgrades</h2>
      <AutoUpgrade name='Spacebar Weight' bytesPerSecond='1 bytes' cost='15 bytes'/>
    </>
  )
}

export default AutoUpgradesPanel;