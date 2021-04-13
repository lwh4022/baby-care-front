import utils from '../server/utils/utilFunc'

test('test', () => {
  expect(utils.authorize()).toEqual('token');
})