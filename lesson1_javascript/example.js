//VD: Sắp xếp mảng học sinh theo tuổi
let students = [
    { name: 'Khanh', age: 7 },
    { name: 'Linh', age: 9 },
    { name: 'Nam', age: 8 },
]
let indexOfMin;
let students2 = []

const findMinOfArr = (params, paramsB) => {
    console.log(params);
}   

findMinOfArr('Khanh')

for (let i = 1; i < students.length; i++) {
    for (let j = 0; j < i; j++) {
        if (students[i].age < students[j].age) {
            let min = students[i].age
            students[i].age = students[j].age
            students[j].age = min
            indexOfMin = j
            students.splice(indexOfMin, 1)
        }
    }
    students2.push(students2[indexOfMin])
}

console.log(students2);

//cách viết ngắn gọn
students.sort((a, b) => a.age - b.age);
console.log(students);