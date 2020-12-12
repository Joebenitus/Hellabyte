export default (state={}, action) => {
  const { byteCount, bytesPerClick, bytesPerSecond, id } = action;
  switch(action.type) {
    case 'DOWNLOAD_BYTES':
      return Object.assign({}, state, {
        [id]: {
          byteCount: byteCount + bytesPerClick,
          bytesPerClick,
          bytesPerSecond,
          id
        }
      })
    case 'UPGRADE_BYTES_PER_CLICK':
      return Object.assign({}, state, {
        [id]: {
          byteCount,
          bytesPerClick: bytesPerClick * 2,
          bytesPerSecond,
          id
        }
      })
      case 'UPGRADE_BYTES_PER_SEC':
        return Object.assign({}, state, {
          [id]: {
            byteCount,
            bytesPerClick,
            bytesPerSecond: bytesPerSecond + 1,
            id
          }
        })
    default:
      return state;
  }
};