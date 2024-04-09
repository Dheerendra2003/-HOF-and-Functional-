let originalNumbers = [2,5,8,10,3];

originalNumbers.forEach((number, index, array) => {
     array[index] = number*2;
});

console.log("Doubled Numbers:", originalNumbers);

// output:
// Doubled Numbers: [ 4, 10, 16, 20, 6 ]