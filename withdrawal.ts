export const withdrawal = (solde: number, montant: number): number | string => {

    if(solde === 0) return "Your balance is insufficient";
    if(solde - montant < 0) return "Can't withdraw";
    if(solde.toString().includes(".") || montant.toString().includes(".")) {
        let result = solde  - montant;

        return result;

    }
    // if(solde === 0){
    //     // let msg = 'error = insufficient balance' 
    //     // console.log(msg)

    //     return solde
    // }
    //return 150;
    return solde - montant;
}