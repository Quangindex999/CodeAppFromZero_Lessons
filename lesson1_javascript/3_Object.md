```javascript

// Object

let info = {
    name: "Quach Khanh",
    age: 28,
    phone: "0335815969",
    job: {
        title: 'Dev',
        type: 'Front End',
    }
}

// đọc thuộc tính của obj
console.log(info.name) // Quach Khanh
console.log(info.job.title) //Dev
console.log(info['age'])// 28
// gán thuộc tính 
info.name = 'Linh'
info.car = 'BMW'
console.log(info) // { name: 'Linh', age: 28, phone: '0335815969', job: { title: 'Dev', type: 'Front End' }, car: 'BMW' }


// Array
let arrayA = [1, 2, 3, 4, 5]
let arrayB = [
    { name: 'Huyndai', model: 'Kona' },
    { name: 'Vinfast', model: 'Lux' },
]


console.log(arrayB[0]) // { name: 'Huyndai', model: 'Kona' }
console.log(arrayB[1].model) // Lux
console.log(arrayA.length); // 5
// Thêm phần tử vào mảng 
arrayA.push(9) // [1,2,3,4,5,9]

// Xoá phần tử khỏi mảng
arrayA.splice(0, 1) // vị trí muốn xoá | số phần tử muốn xoá
//[2,3,4,5,9]

// Cập nhật phần tử
arrayB[0] = {
    name: 'Vin',
    model: 'President',
}
console.log(arrayB); //[{name: 'Vin', model: 'President'}, {name: 'Vinfast', model: 'Lux'}]

```