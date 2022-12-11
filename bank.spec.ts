import { deposit } from "./deposit"
import { withdrawal } from "./withdrawal"
import { loan } from "./loan"
import { currencies } from "./currencies"
import { balance } from "./balance"
import { createAccount, deleteAccount } from './account';

//deposit functionality
describe('deposit', () => {
    it('should return balance + amount when a deposite is made ', () => {
        expect(deposit(0, 200)).toBe(200)
    })
    it('should return balance + amount when a deposite is made ', () => {
        expect(deposit(200, 50)).toBe(250)
    })
    it('should return 250.5 when a deposite is made with balance or amount include .', () => {
        expect(deposit(100.2, 150.3)).toBe(250.5)
    })

})

//withdrawal functionality
describe('withdrawal', () => {
    it('should return balance - amount when a withdrawal is made ', () => {
        expect(withdrawal(250, 100)).toBe(150)
    })
    it('should return balance - amount when a withdrawal is made ', () => {
        expect(withdrawal(150, 150)).toBe(0)
    })
    // it('should return 0 when balance = 0', () => {
    //     expect(withdrawal(0,500)).toBe(0)
    // })

    it('should return "your balance is insufficient" when balance = 0', () => {
        expect(withdrawal(0, 500)).toBe("Your balance is insufficient")
    })
    it('should return "Cannot withdraw" when balance - amount < 0', () => {
        expect(withdrawal(50, 100)).toBe("Can't withdraw")
    })
    it('should return 250.5 if balance or amount include .', () => {
        expect(withdrawal(300.5, 50)).toBe(250.5)
    })
})

//loan functionality
describe('loan', () => {
    it('should return money to refund', () => {
        expect(loan(100, 200)).toBe("Congrats, your new balance is 300 ! You must return: 300")
    })

    it('should return money to refund if balance or amount include .', () => {
        expect(loan(100, 250.5)).toBe("YAS Congrats, your new balance is 350.5 ! You must return: 375.75")
    })
})

//currencies converter
describe('currencies', () => {
    it('should return 600 * 1.053 if we convert 600€ to dollars ($)', () => {
        // we consider that's we're located in France
        expect(currencies(600, "$")).toBe(631.8)
    })
    it('should return 250 * 468.062 if we convert 250€ to Nigerian Naira (₦)', () => {
        expect(currencies(250, "₦")).toBe(117015.5)
    })
    it('should return 1000 * 0.858 if we convert 1000€ to pounds (£)', () => {
        expect(currencies(1000, "£")).toBe(858)
    })
    //test if we need a condition when amount includes "."
    it('should return 1.5 * 0.858 if we convert 1.5€ to pounds (£)', () => {
        expect(currencies(1.5, "£")).toBe(1.287)
    })
    it('should return "unknown currency or not supported" if we want to convert in another or unknown currency', () => {
        expect(currencies(500, "Y")).toBe("unknown currency or not supported")
    })
    it('should return "Impossible" if money to convert = 0', () => {
        expect(currencies(0, "$")).toBe("Impossible")
    })
    it('should return  "Cannot convert negative value" when a negative amount is given', () => {
        expect(currencies(-400, "$")).toBe("Can't convert negative value")
    })
})


//see balance functionality
describe('balance', () => {
    it('should return balance if we ask for it', () => {
        expect(balance(200)).toBe(200)
    })
})

//account functionality
describe('createAccount', () => {
    // it('should return id, name, currency, balance as an object', () => {
    //     expect(createAccount(1,'James Doe', '$', 500)).toStrictEqual({id:1, name:'James Doe', devise:'$', balance:500})
    // })
    it('should not create an account if id or name already used', () => {
        expect(createAccount(1,'James Doe', '$', 500)).toBe("Oups! Id already used or account already created")
    })

    it('should not create an account if id or name already used', () => {
        expect(createAccount(4,'Fifi', '$', 500)).toBe("Oups! Id already used or account already created")
    })
    it('should create account if not already created', () => {
        expect(createAccount(5,'Lucie Wen', '$', 1200)).toBe("congrats ! your account is created")
    })
})


// const person: Person = {
//     id: 1,
//     name: 'James Doe',
//     devise: '$',
// }
// console.log(person)