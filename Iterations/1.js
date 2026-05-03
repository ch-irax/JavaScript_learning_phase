for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best ");

    }
    // console.log(element);

}
// console.log(element);

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner value${j} `);
        // console.log(`${i} * ${j} = ${i*j}`);
    }

}


let myArr = [`sups`, `batman`, `flash`]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}


// break and continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        // console.log("detected 5");
        break  // stops the control flow completely
    }
    // console.log(`Value of i ${i}`);

}
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("detected 5");
        continue  // stops the control flow once
    }
    console.log(`Vslue of i ${i}`);

}