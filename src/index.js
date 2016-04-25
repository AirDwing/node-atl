module.exports = (input, need) => {
  const regx = /^v?V?(\d+).(\d+).(\d+)-?/;
  const inputVersion = input.match(regx);
  const requireVersion = need.match(regx);
  if (inputVersion === null || requireVersion === null) {
    throw new Error('Invalid Version');
  }
  const inputVersionCode = (inputVersion[1] << 16) + (inputVersion[2] << 8) + (inputVersion[3] << 0);
  const requireVersionCode = (requireVersion[1] << 16) + (requireVersion[2] << 8) + (requireVersion[3] << 0);
  return inputVersionCode >= requireVersionCode;
};
