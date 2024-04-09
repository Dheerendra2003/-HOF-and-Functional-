let expenses=[
    {amount: 200, category:"Utilities" },
    {amount: 400, category:"Groceries" },
    {amount: 100, category:"Entertainment" },
];

let groceriesExpenses = expenses.filter(
    (expense)=> expense.category === "Groceries"
);

console.log("Groceries Expenses:" , groceriesExpenses);

// output: 
// Groceries Expenses: [ { amount: 400, category: 'Groceries' } ]