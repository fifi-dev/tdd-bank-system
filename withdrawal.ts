export const withdrawal = (balance: number, amount: number): number | string => {

    if(balance === 0) return "Your balance is insufficient";
    if(balance - amount < 0) return "Can't withdraw";
    if(balance.toString().includes(".") || amount.toString().includes(".")) {
        let result = balance  - amount;

        return result;

    }
    // if(balance === 0){
    //     // let msg = 'error = insufficient balance' 
    //     // console.log(msg)

    //     return balance
    // }
    //return 150;
    return balance - amount;
}