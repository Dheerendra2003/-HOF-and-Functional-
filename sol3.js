let expense=[
    {amount: 200, category:"Utilities" },
    {amount: 400, category:"Groceries" },
    {amount: 100, category:"Entertainment" },
];

let expensewithTax= expense.map((expense)=>{
    let tax=expense.amount*0.1;
    return { ...expense, tax:tax};
})

console.log("Expenses with Tax:", expensewithTax);

/**
 OUTPUT:
Expenses with Tax: [
  { amount: 200, category: 'Utilities', tax: 20 },
  { amount: 400, category: 'Groceries', tax: 40 },
  { amount: 100, category: 'Entertainment', tax: 10 }
]
 */