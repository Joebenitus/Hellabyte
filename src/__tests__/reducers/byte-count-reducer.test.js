import byteCountReducer from '../../reducers/byte-count-reducer';

describe('byteCountReducer', () => {

  let action;
  const gameData = {
    byteCount: 100,
    bytesPerClick: 8,
    bytesPerSecond: 0,
    id: 1
  };

  test('Should return default state if no action type is passed', () => {
    expect(byteCountReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully increment byteCount by bytesPerClick', () => {
    const { byteCount, bytesPerClick, bytesPerSecond, id } = gameData;
    action = {
      type: 'DOWNLOAD_BYTES',
      byteCount,
      bytesPerClick,
      bytesPerSecond,
      id
    };
    expect(byteCountReducer({}, action)).toEqual({
      [id]: {
        byteCount: byteCount + bytesPerClick,
        bytesPerClick,
        bytesPerSecond,
        id
      }
    });
  });
  test('Should successfully multiply the current bytesPerClick by 2', () => {
    const { byteCount, bytesPerClick, bytesPerSecond, id } = gameData;
    action = {
      type: 'UPGRADE_BYTES_PER_CLICK',
      byteCount,
      bytesPerClick,
      bytesPerSecond,
      id
    };
    expect(byteCountReducer({}, action)).toEqual({
      [id]: {
        byteCount,
        bytesPerClick: bytesPerClick * 2,
        bytesPerSecond,
        id
      }
    });
  });

  test('Should successfully increase bytesPerSecond', () => {
    const { byteCount, bytesPerClick, bytesPerSecond, id } = gameData;
    action = {
      type: 'UPGRADE_BYTES_PER_SEC',
      byteCount,
      bytesPerClick,
      bytesPerSecond,
      id
    };
    expect(byteCountReducer({}, action)).toEqual({
      [id]: {
        byteCount,
        bytesPerClick,
        bytesPerSecond: bytesPerSecond + 1,
        id
      }
    });
  });
});