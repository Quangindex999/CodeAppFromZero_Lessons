```javascript

// Function, Scope

// 1, cấu trúc 1 function
// 2, khai báo function, gọi function
// 3, tham số truyền vào function 

const callMyName = (myName) => {
    let sentence = 'Hello ' + myName;
    console.log(sentence);
    // return sentence;
}

callMyName('Khanh'); // Hello Khanh


let foo = 'Hello,'
const myFunction = () => {
    let bar = foo + 'Khanh' // có thể truy cập biến foo;
    console.log(bar);
}

console.log(bar) // Error - biến bar chỉ nằm trong phạm vi function myFunction


```