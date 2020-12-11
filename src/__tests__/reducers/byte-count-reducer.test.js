import byteCountReducer from '../../reducers/byte-count-reducer';

describe('byteCountReducer', () => {
  test('Should return default state if no action type is passed', () => {
    expect(byteCountReducer({}, { type: null })).toEqual({});
  })
})