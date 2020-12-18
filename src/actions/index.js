import * as c from './ActionTypes';

export const mineBytes = (byteCount) => ({
  type: c.MINE_BYTES,
  byteCount
});

export const upgradeBytesPerClick = (bytesPerClick) => ({
  type: c.UPGRADE_BYTES_PER_CLICK,
  bytesPerClick
});

export const upgradeBytesPerSec = (bytesPerSecond) => ({
  type: c.UPGRADE_BYTES_PER_SEC,
  bytesPerSecond
});