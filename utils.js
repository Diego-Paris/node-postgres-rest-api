let utils = {};

utils.to = (p) => {
  return p.then((res) => {
    return [null, res];
  }).catch((err) => {
    return [err];
  });
};

utils.isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
}

module.exports = utils;
