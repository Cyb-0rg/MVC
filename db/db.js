
// Define a function named compare that takes two parameters
function compare(num1, num2) {
    // If the first parameter is greater than the second, return 1 and log "num1 is greater than num2"
    if (num1 > num2) {
      console.log(num1 + " is greater than " + num2);
      return 1;
    }
    // If the first parameter is equal to the second, return 0 and log "num1 is equal to num2"
    else if (num1 == num2) {
      console.log(`${num1} is equal to ${num1}`);
      return 0;
    }
    // If the first parameter is less than the second, return -1 and log "num1 is less than num2"
    else {
      console.log(num1 + " is less than " + num2);
      return -1;
    }
  }
  
  // Test the function with some examples
  compare(3, 5); // -1
  compare(-2, -2); // 0
  compare(7, 4); // 1

  //true ? console.log("true") : console.log("false")

function compare2(num1, num2) {

    (num1 > num2) && true ? console.log("greater") : console.log("smaller");
    
}


try {
	compare2 (2,a);
} catch (error) {
	console.log("error")
}