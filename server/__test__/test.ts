import utils from '../utils/utilFunc';

test('test', () => {
    expect(utils.authorize()).toEqual('token');
  }
)