import byteCountReducer from '../../reducers/byte-count-reducer';

describe('byteCountReducer', () => {

  let action;
  const gameData = {
    byteCount: 1000000,
    bytesPerClick: 10,
    bytesPerSecond: 6,
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
    })
  });
});