import { deposit } from "./deposit"
import { withdrawal } from "./withdrawal"

//depot functionality
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