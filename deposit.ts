export const deposit = (balance: number, amount: number): number => {
    //return 200
    if(balance.toString().includes(".") || amount.toString().includes(".")) {
        let result = balance + amount;

        return result;

    }

    return balance + amount;
}