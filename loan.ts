export const loan = (balance: number, amount: number ): number | string=> {

    let toRefund = amount + (amount * 0.5)
    let newBalance = balance + amount
    return "Congrats, your new balance is " + newBalance + " ! You must return: " + toRefund
}