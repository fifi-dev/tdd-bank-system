export const loan = (balance: number, amount: number ): number | string=> {

    let toRefund = amount + (amount * 0.5)
    let newBalance = balance + amount

    
    if(balance.toString().includes(".") || amount.toString().includes(".")) {

        return "YAS Congrats, your new balance is " + newBalance + " ! You must return: " + toRefund

    }
    return "Congrats, your new balance is " + newBalance + " ! You must return: " + toRefund
}