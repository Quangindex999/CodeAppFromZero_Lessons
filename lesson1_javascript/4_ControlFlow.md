```javascript

// Control Flow - Luồng thực thi 

// 1, if else - nếu thì, nếu không
let a = 3;
if (a % 2 === 1) {
    console.log('a là số lẻ') //true
} else {
    console.log('a là số chẵn') //false
}

// 2, for loop - Vòng lặp
for (let i = 0; i < 4; i++) { // khởi tạo => điều kiện để thực thi => sau khi thực thi
    console.log(i); // 0,1,2,3
}
// VD: Tìm số lớn nhất
let arr = [2, 1, 4, 9, 5];
let maxNumber = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) maxNumber = arr[i]; //true
}
// for of
for (let num of arr) {
    if (num > maxNumber)
    {
        maxNumber = num; //true
    }
}
console.log(maxNumber);


// 3, switch case
let student = {
    class: 'A',
    name: 'Khanh',
}
switch (student.class) {
    case 'A':
        console.log('Học sinh lớp A')
        break;
    case 'B':
        console.log('Học sinh lớp B')
        break;
    default:
        console.log('Học sinh không thuộc lớp A và B')
        break;
}

```