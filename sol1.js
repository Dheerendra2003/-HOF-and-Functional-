const orderlist = [
    {name: "Laptop", price:80000},
    {name: "Mobile", price:5000},
    {name: "Mobile Charger", price:1200},
    {name: "Laptop Charger", price: 3000},
];

let sum=0;
orderlist.forEach((data)=>(sum+= data.price));

console.log("The total price is Rs."+sum);

// OUTPUT: The total price is Rs.89200