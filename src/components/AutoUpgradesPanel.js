import React from 'react';
import AutoUpgrade from './AutoUpgrade';
import PropTypes from 'prop-types';
import { getByteMetric } from './GetByteMetric';
import styled from 'styled-components';

const ComponentStyleWrapper = styled.section`
  overflow-y: scroll;
  height: calc(100vh - 205px);
`

function AutoUpgradesPanel(props) {
  const { autoUpgrades } = props;

  return (
    <>
      <h2>Auto Upgrades</h2>
      <ComponentStyleWrapper>
        <AutoUpgrade name={autoUpgrades[1].name} bytesPerSecond={getByteMetric(autoUpgrades[1].bytesPerSecond)} cost={getByteMetric(autoUpgrades[1].cost)} owned={autoUpgrades[1].owned} index={autoUpgrades[1].index} onClickHandler={props.onClickHandler}/>
        <AutoUpgrade name={autoUpgrades[2].name} bytesPerSecond={getByteMetric(autoUpgrades[2].bytesPerSecond)} cost={getByteMetric(autoUpgrades[2].cost)} owned={autoUpgrades[2].owned} index={autoUpgrades[2].index} onClickHandler={props.onClickHandler}/>
        <AutoUpgrade name={autoUpgrades[3].name} bytesPerSecond={getByteMetric(autoUpgrades[3].bytesPerSecond)} cost={getByteMetric(autoUpgrades[3].cost)} owned={autoUpgrades[3].owned} index={autoUpgrades[3].index} onClickHandler={props.onClickHandler}/>
        <AutoUpgrade name={autoUpgrades[4].name} bytesPerSecond={getByteMetric(autoUpgrades[4].bytesPerSecond)} cost={getByteMetric(autoUpgrades[4].cost)} owned={autoUpgrades[4].owned} index={autoUpgrades[4].index} onClickHandler={props.onClickHandler}/>
        <AutoUpgrade name={autoUpgrades[5].name} bytesPerSecond={getByteMetric(autoUpgrades[5].bytesPerSecond)} cost={getByteMetric(autoUpgrades[5].cost)} owned={autoUpgrades[5].owned} index={autoUpgrades[5].index} onClickHandler={props.onClickHandler}/>
      </ComponentStyleWrapper>
    </>
  )
}

AutoUpgradesPanel.propTypes = {
  onClickHandler: PropTypes.func,
  autoUpgrades: PropTypes.object
}

export default AutoUpgradesPanel;