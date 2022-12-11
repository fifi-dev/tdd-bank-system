import { deposit } from "./deposit"
import { withdrawal } from "./withdrawal"
import { loan } from "./loan"

//deposit functionality
describe('deposit', () => {
    it('should return solde + montant when a deposite is made ', () => {
        expect(deposit(0,200)).toBe(200)
    })
    it('should return solde + montant when a deposite is made ', () => {
        expect(deposit(200,50)).toBe(250)
    })
    it('should return 250.5 when a deposite is made with solde or montant include .', () => {
        expect(deposit(100.2,150.3)).toBe(250.5)
    })

})

//withdrawal functionality
describe('withdrawal', () => {
    it('should return solde - montant when a withdrawal is made ', () => {
        expect(withdrawal(250,100)).toBe(150)
    })
    it('should return solde - montant when a withdrawal is made ', () => {
        expect(withdrawal(150,150)).toBe(0)
    })
    // it('should return 0 when solde = 0', () => {
    //     expect(withdrawal(0,500)).toBe(0)
    // })
    
    it('should return "your balance is insufficient" when solde = 0', () => {
        expect(withdrawal(0,500)).toBe("Your balance is insufficient")
    })
    it('should return "Cannot withdraw" when solde - montant < 0', () => {
        expect(withdrawal(50,100)).toBe("Can't withdraw")
    })
    it('should return 250.5 if solde or montant include .', () => {
        expect(withdrawal(300.5,50)).toBe(250.5)
    })
})

//loan functionality
describe('loan', () => {
    it('should return money to refund', () => {
        expect(loan(100,200)).toBe("Congrats, your new balance is 300 ! You must return: 300")
    })
    
    it('should return money to refund if balance or amount include .', () => {
        expect(loan(100,250.5)).toBe("YAS Congrats, your new balance is 350.5 ! You must return: 375.75")
    })
})