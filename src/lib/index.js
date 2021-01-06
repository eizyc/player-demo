/* eslint-disable radix */
const Library = {
  // 生成不重复ID
  createRandomId() {
    return `${(Math.random() * 10000000).toString(16).substr(0, 4)}-${(new Date()).getTime()}-${parseInt(Math.random() * 10000000).toString(16).substr(0, 4)}`;
  },
};

export default Library;
