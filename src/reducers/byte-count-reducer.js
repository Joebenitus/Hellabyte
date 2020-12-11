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
    default:
      return state;
  }
};