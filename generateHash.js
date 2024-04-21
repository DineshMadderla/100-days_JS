//  practice_2 HashTag generator

//  You are required to implement a function generateHash that generates a hash tag from a 
// given input string.
// the hash should be constructed as follows :

//  The input string should be converted to a hash tag format, where each word is capitalized and concatenated
// together without spaces.

//  If the length of the input string is greater than 280 characters or if the input string is empty or
// contains only whitespace, the function should return false.

//  Otherwise, the function should return the generated hash tag prefixed with #.

//  Write a function generateHash to accomplish this task

const generateHash = (string) => {
  if (string.length > 280 || string.trim().length === 0) {
    return false;
  }
  string = string.split(" ");
   string = string.map((curEle) =>
    // curEle.replace(curEle[0], curEle[0].toUpperCase())
    curEle.charAt(0).toUpperCase() + curEle.slice(1)
  );
   string = `#${string.join("")}`
   return string;
     
};

console.log(generateHash("i'm the man who will become the pirate king"));
