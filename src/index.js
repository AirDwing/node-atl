module.exports = (input, need) => {
  const regx = /^v?V?(\d+).(\d+).(\d+)-?/;
  const inputVersion = input.match(regx);
  const requireVersion = need.match(regx);
  if (inputVersion === null || requireVersion === null) {
    return false;
  }
  if (inputVersion[1] > requireVersion[1]) {
    return true;
  } else if (inputVersion[1] < requireVersion[1]) {
    return false;
  }
  if (inputVersion[2] > requireVersion[2]) {
    return true;
  } else if (inputVersion[2] < requireVersion[2]) {
    return false;
  }
  if (inputVersion[3] >= requireVersion[3]) {
    return true;
  }
  return false;
};
