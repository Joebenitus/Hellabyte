import * as c from './ActionTypes';

export const mineBytes = (byteCount, bytesPerClick) => ({
  type: c.MINE_BYTES,
  byteCount,
  bytesPerClick
})

export const upgradeBytesPerClick = () => ({
  type: c.UPGRADE_BYTES_PER_CLICK
});

export const upgradeBytesPerSec = () => ({
  type: c.UPGRADE_BYTES_PER_SEC
});