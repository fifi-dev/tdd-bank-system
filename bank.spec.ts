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
})

describe('withdrawal', () => {
    it('should return solde + montant when a deposite is made ', () => {
        expect(withdrawal(250,100)).toBe(150)
    })
    it('should return solde + montant when a deposite is made ', () => {
        expect(withdrawal(150,150)).toBe(0)
    })
    it('should return 0 when solde = 0', () => {
        expect(withdrawal(0,500)).toBe(0)
    })
})