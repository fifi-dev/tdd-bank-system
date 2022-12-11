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
const accounts = [
    {id:1, name:'Fifi', currency:'€', balance:100000},
    {id:2, name:'Coralie', currency:'$', balance:100000},
    {id:3, name:'Dona', currency:'£', balance:100000},

] as const;

export const createAccount = (id: number, name: string, currency: string, balance: number): object => {
    
    return {
        id:id, name:name, currency:currency, balance:balance
    }
}