export const withdrawal = (solde: number, montant: number): number | string => {

    if(solde === 0) return "error";
    // if(solde === 0){
    //     // let msg = 'error = insufficient balance' 
    //     // console.log(msg)

    //     return solde
    // }
    //return 150;
    return solde - montant;
}