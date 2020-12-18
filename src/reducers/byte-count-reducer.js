import * as c from './../actions/ActionTypes';

export default (state={}, action) => {
  const { byteCount, bytesPerClick, bytesPerSecond, id } = action;
  switch(action.type) {
    case c.MINE_BYTES:
      return Object.assign({}, state, {
        [id]: {
          byteCount: byteCount + bytesPerClick
        }
      })
    case c.UPGRADE_BYTES_PER_CLICK:
      return Object.assign({}, state, {
        [id]: {
          bytesPerClick: bytesPerClick * 2
        }
      })
      case c.UPGRADE_BYTES_PER_SEC:
        return Object.assign({}, state, {
          [id]: {
            bytesPerSecond: bytesPerSecond + 1
          }
        })
    default:
      return state;
  }
};