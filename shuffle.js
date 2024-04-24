//shuffle Array

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const originalArray = [1, 2, 3, 4, 5, 6, 7];
const shuffleArray = shuffle([...originalArray]);

console.log("OriginalArray:", originalArray);
console.log("shuffledArray:", shuffleArray);
