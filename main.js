/* START CODE UNDER THIS LINE */
//q1 Write a function double that accepts one argument number and returns the number doubled.

const double = function (number) {
    // TODO: Your code here
    return number *2;
  };
  
 console .log(double(2)); // => 4
 console.log (double(5)); // => 10
 console.log(double(10)) ; // => 20
 //q2 Write a function fullName that accepts string arguments, firstName and lastName then returns a string containing your full name combined.

const fullName = function (firstName, lastName) {
    // TODO: Your code here
    return "firstName"+"lastName"
  };
  
 console.log (fullName("John", "Doe")); // => "John Doe"
 console.log( fullName("Mark", "Smith")); // => "Mark Smith"
 //q 3Write a function average that accepts two number arguments and returns the average of these numbers.
 const average = function (a, b) {
    // TODO: Your code here
    return(a+b)/2
  };
  
 console.log(average(20, 25)); // => 22.5
 console.log(average(15, 7)); // => 11

 //q4 Using the defined functions below and your average function try to guess the output of the following expressions without executing the functions.

const square = function (number) {
  return number * number;
};

const cube = function (number) {
  return number * number * number;
};

// guess the following before trying it in the console
cube(25) + 20; // => 15645
square(5) + cube(2); // => 33
square(10 / 5) + cube(2 + 1); // => 31
average(square(average(6, 2)), cube(4)); // => 40