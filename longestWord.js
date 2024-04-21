// first day of JS 

const findlongestWord = (string) => {
  if (string.trim().length === 0) {
    return false;
  }
  stringArray = string.split(" ");
    stringArray = stringArray.sort((a,b) => b.length - a.length);
    console.log(stringArray)
    return stringArray[0]
  return stringArray.reduce((acc, cur) => (cur.length > acc.length ? cur : acc), "");
};

console.log(
  findlongestWord("Hello i'm practicing the javascript logic building")
);
