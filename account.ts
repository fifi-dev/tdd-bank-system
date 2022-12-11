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
  
export const createAccount = (id: number, name: string, currency: string, balance: number): object => {
    return {
        id:id, name:name, currency:currency, balance:balance
    }
}