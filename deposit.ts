export const deposit = (solde: number, montant: number): number => {
    //return 200
    if(solde.toString().includes(".") || montant.toString().includes(".")) {
        let result = solde + montant;

        return result;

    }

    return solde + montant;
}