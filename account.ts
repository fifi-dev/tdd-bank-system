// // 👇️ named export
// export class User {
//     public name : string;
//     public constructor(theName: string){
//     this.name = theName;
//     }

//     // increaseSalary() {
//     //     this.salary += 100;
//     // }
// }

// 👇️ named export
// export interface Person {
//     id: number;
//     name: string;
//     devise: string;
//   }


export const createAccount = (id: number, name: string, currency: string, balance: number): object | string => {
    
    let accounts = [
        {id:1, name:'James Doe', devise:'$', balance:500},
        {id:2, name:'Fifi', currency:'€', balance:100000},
        {id:3, name:'Coralie', currency:'$', balance:100000},
        {id:4, name:'Dona', currency:'£', balance:100000},
    
    ]
    let newAccount = {id:id, name:name, currency:currency, balance:balance}

    // for(const account in accounts){
    //     let res = "";
    //     if(JSON.parse(account).id == newAccount.id){
    //         res = "account with the same id already exists"
    //     }else{
    //         accounts.push(newAccount)
    //         res = "account created"
    //     } return res
    // }

    for(let account in accounts){
        let res = ""
        if(account.match(newAccount.name)){
            res = "account with the same id already exists"
            return res
        }else{
            accounts.push(newAccount)
            res = "account created"
            return accounts
        } 
    }

    return newAccount
}