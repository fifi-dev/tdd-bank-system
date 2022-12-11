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
//     currency: string;
//   }


export const createAccount = (id: number, name: string, currency: string, balance: number) => {
    
    let accounts = [
        {id:1, name:'James Doe', currency:'$', balance:500},
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

    // type Account = {id: number, name: string, currency: string, balance: number};
    // let account: Account[] = [];
    // account.push({id:1, name:'James Doe', currency:'$', balance:500});
  
    // let duplicates = this.findElements<Person, number>(people, 'age', 44);


    // for(let account in accounts){
      
    //     let res = ""
    //     if(account.match(newAccount.name)){
    //         res = "account with the same id already exists"
    //         return res
    //     }else{
    //         accounts.push(newAccount)
    //         res = "account created"
    //         return newAccount.name
    //     } 
    // }


   
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