//? Write a function called checkTriangleType that takes three parameters representing the
//lengths of the sides of a triangle. The function should return a string indicating the type
//of triangle: "equilateral", "isosceles", or "scalene".

//todo The function should adhere to the following rules:
//? If all three sides are of equal length, return "equilateral".
//? If only two sides are of equal length, return "isosceles".
//? If all three sides have different lengths, return "scalene"..

const checkTriangleType = (value1, value2, value3) => {
  if (value1 === value2 && value1 === value3) {
    console.log("equilateral");
  } else if (value1 === value2 || value2 === value3 || value1 === value3) {
    console.log("isosceles");
  } else {
    console.log("scalene");
  }
  return 
};

checkTriangleType(3, 3, 3); // Output: "equilateral"
checkTriangleType(3, 4, 3); // Output: "isosceles"
checkTriangleType(5, 8, 6); // Output: "scalene"
