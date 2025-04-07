console.log("hello")

// function discAmount(price, percentage) {
//     let disc = price * percentage
//     finalPrice = price - disc
//     return finalPrice
//     // console.log(finalPrice, "finalPrice")
// }

// console.log(discAmount(10000, 0.2), "hello")
// console.log(discAmount(30000, 0.3), "hello")
// console.log(discAmount(50000, 0.6), "hello")
// console.log(discAmount(100000, 0.25), "hello")

// let result = discAmount(234423, 0.15)
// document.write(`Price: ${result} `)
// console.log(disc)




// function discAmount(price, percentage) {
//     let disc = price * percentage
//     finalPrice = price - disc
// }

// function taxCalculate(price, percentage) {
//     let tax = price * percentage
//     finalPrice = price + tax
// }

// let finalPrice
// discAmount(234423, 0.15)
// taxCalculate(finalPrice, 0.18)
// document.write(`Price: ${finalPrice} `)


//********************************** */



function discAmount(price, percentage) {
    let disc = price * percentage
    let finalPrice = price - disc
    return finalPrice
}

function taxCalculate(price, percentage) {
    let tax = price * percentage
    let finalPrice = price + tax
    return finalPrice
    // console.log(finalPrice)
}

let discountedPrice = discAmount(234423, 0.15)
let addTax = taxCalculate(discountedPrice, 0.18)
document.write(`Price: ${addTax} `)