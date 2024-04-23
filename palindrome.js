// Write a function wether the given string is a Palindrome or not//

const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/\W/g,'');
  let r_str = str.split("").reverse().join("");

  console.log(r_str);
  return str === r_str ? true : false;
};

console.log(isPalindrome("ra'c'e,car"));
