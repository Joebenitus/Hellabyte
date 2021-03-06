import * as c from './../actions/ActionTypes';
import { getByteMetric } from './../components/GetByteMetric';
import { AutoUpgradeList } from './../components/AutoUpgradeList';

const defaultState = {
  byteCount: 0,
  byteCountFormatted: '0 Bytes',
  bytesPerClick: 1,
  bytesPerClickFormatted: '1 Bytes',
  bytesPerSecond: 0,
  bytesPerSecondFormatted: '0 Bytes',
  bytesPerClickUpgradeCost: 1000,
  autoUpgrades: AutoUpgradeList
}

export default (state=defaultState, action) => {
  const { byteCount, bytesPerClick, bytesPerSecond, bytesPerClickUpgradeCost, autoUpgrades, index } = action;
  switch(action.type) {
    case c.MINE_BYTES:
      return Object.assign({}, state, {
        byteCount: byteCount + bytesPerClick,
        byteCountFormatted: getByteMetric(byteCount + bytesPerClick)
      })
    case c.UPGRADE_BYTES_PER_CLICK:
      return Object.assign({}, state, {
        byteCount: byteCount - bytesPerClickUpgradeCost,
        bytesPerClick: bytesPerClick * 2,
        bytesPerClickFormatted: getByteMetric(bytesPerClick * 2),
        bytesPerClickUpgradeCost: bytesPerClickUpgradeCost * 2
      })
    case c.UPGRADE_BYTES_PER_SEC:
      return Object.assign({}, state, {
        byteCount: byteCount - autoUpgrades[index].cost,
        bytesPerSecond: bytesPerSecond + autoUpgrades[index].bytesPerSecond,
        bytesPerSecondFormatted: getByteMetric(bytesPerSecond + autoUpgrades[index].bytesPerSecond),
        autoUpgrades: {
          ...autoUpgrades,
          [index]: {...autoUpgrades[index], owned: autoUpgrades[index].owned + 1, cost: Math.floor(autoUpgrades[index].cost * 1.3)}
        }
      })
    case c.INCREMENT_BYTES_BY_BPS:
      return Object.assign({}, state, {
        byteCount: byteCount + bytesPerSecond,
        byteCountFormatted: getByteMetric(byteCount + bytesPerSecond)
      })
    default:
      return state;
  }
};