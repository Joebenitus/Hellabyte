import { AutoUpgradeList } from '../../components/AutoUpgradeList';
import byteCountReducer from '../../reducers/byte-count-reducer';
import * as c from './../../actions/ActionTypes';
import { getByteMetric } from './../../components/GetByteMetric';

describe('byteCountReducer', () => {

  let action;
  const gameData = {
    byteCount: 100,
    bytesPerClick: 8,
    bytesPerSecond: 2,
    bytesPerClickUpgradeCost: 1000,
    autoUpgrades: AutoUpgradeList
  };

  test('Should return default state if no action type is passed', () => {
    expect(byteCountReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully increment byteCount by bytesPerClick', () => {
    const { byteCount, bytesPerClick, bytesPerSecond } = gameData;
    action = {
      type: c.MINE_BYTES,
      byteCount,
      bytesPerClick,
      bytesPerSecond
    };
    expect(byteCountReducer({}, action)).toEqual({
      byteCount: byteCount + bytesPerClick,
      byteCountFormatted: getByteMetric(byteCount + bytesPerClick)
    });
  });
  test('Should successfully multiply the current bytesPerClick by 2', () => {
    const { byteCount, bytesPerClick, bytesPerSecond, bytesPerClickUpgradeCost } = gameData;
    action = {
      type: c.UPGRADE_BYTES_PER_CLICK,
      byteCount,
      bytesPerClick,
      bytesPerSecond,
      bytesPerClickUpgradeCost
    };
    expect(byteCountReducer({}, action)).toEqual({
      byteCount: byteCount - bytesPerClickUpgradeCost,
      bytesPerClick: bytesPerClick * 2,
      bytesPerClickFormatted: getByteMetric(bytesPerClick * 2),
      bytesPerClickUpgradeCost: bytesPerClickUpgradeCost * 2
    });
  });

  test('Should successfully increase bytesPerSecond', () => {
    const { byteCount, bytesPerClick, bytesPerSecond, autoUpgrades } = gameData;
    action = {
      type: c.UPGRADE_BYTES_PER_SEC,
      byteCount,
      bytesPerClick,
      bytesPerSecond,
      autoUpgrades,
      index: autoUpgrades[1].index
    };
    expect(byteCountReducer({}, action)).toEqual({
      byteCount: byteCount - autoUpgrades[action.index].cost,
      bytesPerSecond: bytesPerSecond + autoUpgrades[action.index].bytesPerSecond,
      autoUpgrades: {
        ...autoUpgrades,
        [action.index]: {...autoUpgrades[action.index], owned: autoUpgrades[action.index].owned + 1, cost: Math.floor(autoUpgrades[action.index].cost * 1.3)}
      }
    });
  });

  test('Should successfully increment byteCount by bytesPerSecond', () => {
    const { byteCount, bytesPerClick, bytesPerSecond } = gameData;
    action = {
      type: c.INCREMENT_BYTES_BY_BPS,
      byteCount,
      bytesPerClick,
      bytesPerSecond
    };
    expect(byteCountReducer({}, action)).toEqual({
      byteCount: byteCount + bytesPerSecond,
      byteCountFormatted: '102 Bytes'
    });
  });
});