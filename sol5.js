let expenses=[
    {amount: 200, category:"Utilities" },
    {amount: 400, category:"Groceries" },
    {amount: 100, category:"Entertainment" },
];

let totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

console.log("Total Expenses:", totalExpenses);

/**
 * output:
 * Total Expenses: 700
 */