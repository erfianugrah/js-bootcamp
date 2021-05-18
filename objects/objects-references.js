let myAccount = {
    name: 'Erfi Anugrah',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, income) {
    account.income = account.income + income
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (summary) {

    return `Account for ${summary.name} has $${summary.income - summary.expenses}. $${summary.expenses} in expenses.`
}

// addIncome
// resetAccount
// getAccountSummary
// Account for Andrew has $900. $1000 in income. $100 in expenses

// addIncome
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary