import * as c from './ActionTypes';

export const mineBytes = (byteCount, bytesPerClick) => ({
  type: c.MINE_BYTES,
  byteCount,
  bytesPerClick
})

export const upgradeBytesPerClick = (bytesPerClick) => ({
  type: c.UPGRADE_BYTES_PER_CLICK,
  bytesPerClick
});

export const upgradeBytesPerSecond = (bytesPerSecond) => ({
  type: c.UPGRADE_BYTES_PER_SEC,
  bytesPerSecond
});

export const incrementBytesByBPS = (byteCount, bytesPerSecond) => ({
  type: c.UPGRADE_BYTES_PER_SEC,
  byteCount,
  bytesPerSecond
});