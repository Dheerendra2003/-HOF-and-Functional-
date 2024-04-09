let expenses=[
    {amount: 200, category:"Utilities" },
    {amount: 400, category:"Groceries" },
    {amount: 100, category:"Entertainment" },
];

function categorizeExpense (expense) {
    if (expense.amount > 100){
        return "High Expense";
    }else 
    {
        return "Low Expense";
    }
}

let categorizeExpenses = expenses.map((expense) => 
    categorizeExpense(expense)
);

console.log("Categorized Expense:", categorizeExpenses);

// output:
// Categorized Expense: [ 'High Expense', 'High Expense', 'Low Expense' ]