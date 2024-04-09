let evennumbers= [ ];

originalNumbers.forEach(number =>{
    if(number%2 === 0){
        evennumbers.push(number);
    }
});

console.log("Even Number:", evennumbers);