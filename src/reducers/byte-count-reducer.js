import * as c from './../actions/ActionTypes';
import { getByteMetric } from './../components/GetByteMetric';

const defaultState = {
  byteCount: 0,
  byteCountFormatted: '0 Bytes',
  bytesPerClick: 1,
  bytesPerClickFormatted: '1 Bytes',
  bytesPerSecond: 0,
  bytesPerSecondFormatted: '0 Bytes',
  bytesPerClickUpgradeCost: 1000
}

export default (state=defaultState, action) => {
  const { byteCount, bytesPerClick, bytesPerSecond } = action;
  switch(action.type) {
    case c.MINE_BYTES:
      return Object.assign({}, state, {
        byteCount: byteCount + bytesPerClick,
        byteCountFormatted: getByteMetric(byteCount + bytesPerClick)
      })
    case c.UPGRADE_BYTES_PER_CLICK:
      return Object.assign({}, state, {
        bytesPerClick: bytesPerClick * 2,
        bytesPerClickFormatted: getByteMetric(bytesPerClick * 2)
      })
    case c.UPGRADE_BYTES_PER_SEC:
      return Object.assign({}, state, {
        bytesPerSecond: bytesPerSecond + 1
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