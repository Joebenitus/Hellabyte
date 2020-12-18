import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('byte count reducer actions', () => {
  it('mineBytes should create MINE_BYTES action', () => {
    expect(actions.mineBytes()).toEqual({
      type: c.MINE_BYTES,
    });
  });

  it('upgradeBytesPerClick should create UPGRADE_BYTES_PER_CLICK action', () => {
    expect(actions.upgradeBytesPerClick()).toEqual({
      type: c.UPGRADE_BYTES_PER_CLICK,
    });
  });

  it('upgradeBytesPerSec should create UPGRADE_BYTES_PER_SEC action', () => {
    expect(actions.upgradeBytesPerSec()).toEqual({
      type: c.UPGRADE_BYTES_PER_SEC,
    });
  });
});