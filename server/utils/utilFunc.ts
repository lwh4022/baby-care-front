const utils = {
  authorize: () => {
    return 'token';
  },
  isAuthorized: secret => secret === 'wizard',
};

export default utils;