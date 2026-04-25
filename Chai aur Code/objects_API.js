// Object de-structure

const order = {
    item: "Burger",
    drinks: "Hineken",
    dessert: "darkchocolate",
    total: "599"
}
// order.total

const { total: amount } = order
// console.log(total);
console.log(amount);

