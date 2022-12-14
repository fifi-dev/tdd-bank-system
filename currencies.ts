export const currencies = (amount: number, currency: string): number | string =>{
    if(amount === 0) return "Impossible"
    if(amount.toString().includes("-")) return "Can't convert negative value"
    // dollars's rate
    let rateUSD = 1.053
    // naira's rate
    let rateNGN = 468.062
    // pound's rate
    let rateGBP = 0.858
    if(currency === "$") return amount * rateUSD
    if(currency === "₦") return amount * rateNGN
    if(currency === "£") return amount * rateGBP
    return "unknown currency or not supported"
}