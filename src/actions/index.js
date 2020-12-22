import * as c from './ActionTypes';

export const mineBytes = (byteCount, bytesPerClick) => ({
  type: c.MINE_BYTES,
  byteCount,
  bytesPerClick
})

export const upgradeBytesPerClick = (byteCount, bytesPerClick, bytesPerClickUpgradeCost) => ({
  type: c.UPGRADE_BYTES_PER_CLICK,
  byteCount,
  bytesPerClick,
  bytesPerClickUpgradeCost
});

export const upgradeBytesPerSecond = (bytesPerSecond) => ({
  type: c.UPGRADE_BYTES_PER_SEC,
  bytesPerSecond
});

export const incrementBytesByBPS = (byteCount, bytesPerSecond) => ({
  type: c.INCREMENT_BYTES_BY_BPS,
  byteCount,
  bytesPerSecond
});

export const updateGameInterval = (gameInterval) => ({
  type: c.UPDATE_GAME_INTERVAL,
  gameInterval
})