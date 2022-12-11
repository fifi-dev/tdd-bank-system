export const loan = (balance: number, amount: number ): number | string=> {

    let toRefund = amount + (amount * 0.5)
    return toRefund
}