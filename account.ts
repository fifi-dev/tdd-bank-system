type Account = {id: number, name: string, currency: string, balance: number};
    let accounts: Account[] = [];
    accounts.push({id:1, name:'Fifi', currency:'€', balance:100000});
    accounts.push({id:2, name:'Coralie', currency:'$', balance:100000});
    accounts.push({id:3, name:'Dona', currency:'£', balance:100000});

export const createAccount = (id: number, name: string, currency: string, balance: number): object | string => {

    let newAccount = {id:id, name:name, currency:currency, balance:balance}

    
    for (var i = 0, len = accounts.length; i < len; i++ ) {
        if(accounts[i].id.toString() === newAccount.id.toString() || accounts[i].name === newAccount.name){
            return "Oups! Id already used or account already created"
        }else{
            accounts.push(newAccount)
            return "congrats ! your account is created"
        }
    }
    return newAccount
}

export const deleteAccount = (id: number, name: string): object | string => {

    let accountToDelete = {id:id, name:name}
    for (var i = 0, len = accounts.length; i < len; i++ ) {
        if(accounts[i].id.toString() === accountToDelete.id.toString() && accounts[i].name === accountToDelete.name){
            delete accounts[i]
            //return accounts
            return "Account of " + accountToDelete.name + " deleted"
        }else{
            return "Oups ! wrong account details"
        }
    }
    return accountToDelete
}
/*
export const editAccount = (id: number, name: string, newName: string): object | string => {

    let accountToEdit = {id:id, name: name}
    for (var i = 0, len = accounts.length; i < len; i++ ) {
        if(accounts[i].id.toString() === accountToEdit.id.toString() && accounts[i].name === accountToEdit.name){
            accounts[i].name = newName
            //return accounts
            return "The name of " + accountToEdit.name + " has been replace by " + newName
        }else{
            return "Oups ! wrong account details"
        }
    }
    return accountToEdit
}
*/