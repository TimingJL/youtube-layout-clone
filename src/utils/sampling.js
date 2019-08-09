export const getRandom = (min, max) => Math.floor(Math.random() * max) + min;

export const getSampling = (num, max) => {
  const arr = [];
  const json = {};
  while (arr.length < num) {
    const k = getRandom(0, max);
    if (!json[k]) {
      json[k] = true;
      arr.push(k);
    }
  }
  return arr;
};
