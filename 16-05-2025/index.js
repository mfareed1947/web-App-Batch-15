console.log("object")

const mobile = {
    brand: "samsung",
    color: "white",
    model: "A14",
    ram: "8gb",
    storage: "128gb",
    func: () => {

    },
    array: [],
    bool: true,
    define: undefined,
    nahihe: null
}

// console.log(mobile.brand)
// console.log(mobile)

mobile.color = "black"

// const mobiles = [
//     {
//         brand: "samsung",
//         color: "white",
//         model: "A14",
//         ram: "8gb",
//         storage: "128gb",
//     },
//     {
//         brand: "samsung",
//         color: "black",
//         model: "A50",
//         ram: "8gb",
//         storage: "64gb",
//     },
//     {
//         brand: "samsung",
//         color: "white",
//         model: "note24",
//         ram: "16gb",
//         storage: "256gb",
//     }
// ]

// console.log(mobiles[2].model)

// let b;
// const a = {
//     name: "ali",
//     age: 23,
//     gender: "male"
// }
// b = a
// b.gender = "female"

// console.log(a)

// const object1 = {
//     a: "some string",
//     b: 42,
//     c: false,
// };

// console.log(Object.keys(object1));
// console.log(Object.values(object1));


// const inventory = [
//     { name: "asparagus", type: "vegetables", quantity: 9 },
//     { name: "bananas", type: "fruit", quantity: 5 },
//     { name: "goat", type: "meat", quantity: 23 },
//     { name: "cherries", type: "fruit", quantity: 12 },
//     { name: "fish", type: "meat", quantity: 22 },
// ];

// const result = Object.groupBy(inventory, (currElem) =>
//     currElem.quantity < 6 ? "restock" : "sufficient",
// );
// console.log(result);

// if (currElem.quantity < 6) {
//     "restock"
// } else {
//     "sufficient"
// }
// const result = 2 == 1 ? "sahi he" : "galat he"
// let isPresent = 2 ?? 0
// console.log(isPresent)


// const students = [
//     { name: "ali", marks: 565 },
//     { name: "ahmed", marks: 455 },
//     { name: "raza", marks: 675 },
//     { name: "nawaz", marks: 344 }
// ]
// const data = Object.groupBy(students, ((obj) => {
//     return obj.marks < 400 ? "fail" : "pass"
// }))


// console.log(data)



// const object1 = {
//     prop: "exists",
// };

// console.log(Object.hasOwn(object1, "prop"));