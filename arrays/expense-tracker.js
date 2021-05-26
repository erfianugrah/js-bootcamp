const account = {
    name: 'Erfi Anugrah',
    expenses: [],
    income: [],
    addExpense: function (description, amount ) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount ) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0

        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
    })
        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
    })

    accountBalance = totalIncome - totalExpenses

    return `Account for ${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    },
}

// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Erfi Anugrah has $1250 in expenses. forEach
// 1. Add income array to account
// 2. addIncome method -> description, amount
// 3. Tweak getAccountSummary

account.addIncome('Salary', 950)
account.addExpense('Coffee', 2)
account.addExpense('Coffee', 2)
console.log(account.getAccountSummary())