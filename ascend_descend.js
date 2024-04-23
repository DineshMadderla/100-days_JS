

const orderNum = (arr) => {
  return arr.sort((a,b) => b - a);
};

console.log(orderNum([33, 66, 3, 4, 0]));
