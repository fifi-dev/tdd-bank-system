export const createAccount = (id: number, name: string, currency: string, balance: number) => {
    
    let accounts = [
        {id:1, name:'James Doe', currency:'$', balance:500},
        {id:2, name:'Fifi', currency:'€', balance:100000},
        {id:3, name:'Coralie', currency:'$', balance:100000},
        {id:4, name:'Dona', currency:'£', balance:100000},
    
    ]
    let newAccount = {id:id, name:name, currency:currency, balance:balance}

        let res = ""
        let accountName = accounts.find(({ name }) => name === newAccount.name);
        let accountId = accounts.find(({ id }) => id === newAccount.id);
        if(accountName || accountId){
            res = "account with the same name or id already exists"
            return res
        }
       
        
        if(!accountId ){
            accounts.push(newAccount)
            res = "account created"
            return res
        } 
    
}