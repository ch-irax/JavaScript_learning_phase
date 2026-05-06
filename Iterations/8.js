// reduce method

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const initialval = 0
// const mytotal = array1.reduce((acc, currval) => acc + currval, initialval)
// console.log(`acc ${acc} and currval:- ${currval}`);

// console.log(mytotal);



const shoppingcart = [
    {
        itemname: "js course",
        price: 2999
    },
    {
        itemname: "docker course",
        price: 9999
    },
    {
        itemname: "jsx course",
        price: 5999
    },
    {
        itemname: "R course",
        price: 3999
    }
]

const sumprice = shoppingcart.reduce((acc, item) => acc + item.price, 0)

console.log(sumprice);
