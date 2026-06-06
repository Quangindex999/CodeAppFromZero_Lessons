// const arr = [2,9,3,12,4,5];
const students = [
    { name: 'Khanh', age: 7 },
    { name: 'Linh', age: 9 },
    { name: 'Nam', age: 8 },
]
// 1, Tính tổng các số trong mảng

// const totalOfArr = () => {
//     let total = 0;
//     for(let items of arr)
//     {
//         total += items;
//     }
//     return total;
// }
// console.log(totalOfArr());

//2. Tạo 1 mảng mới chứa các số lẻ 

// const oddArr = () => {
//     const newArr = []
//     for(let items of arr)
//     {
//         if(items % 2 === 1)
//         {
//             newArr.push(items)
//         }
//     }
//     return newArr
// }
// console.log(oddArr());

// 3, Tạo 1 mảng mới chứa các số chia hết cho 3

// const divisibleByThree =() => {
//     let newArr = []
//     for(let items of arr)
//     {
//         if(items % 3 === 0)
//         {
//             newArr.push(items)
//         }
//     }
//     return newArr
// }
// console.log(divisibleByThree());

// 4, Sắp xếp dãy số trên theo thứ tự từ nhỏ đến lớn;
// const newArr = arr.sort((a,b) => a - b);
// console.log(newArr);

// 1, Viết hàm console log ra tên của toàn bộ học sinh
    // const printNameStudents = () => {
    //     for(let student of students)
    //     {
    //         console.log(student.name)
    //     }
    // }
    // printNameStudents();
// 2, Tìm và log ra học sinh có số tuổi nhỏ nhất

// const minAgeStudent = () => {
//     let minAge = students[0].age
//     for(let student of students)
//     {
//         if(minAge > student.age)
//         {
//             minAge = student.age
//         }
//     }
//     return minAge;
// }

// console.log(minAgeStudent());

// 3, Sắp xếp lại mảng theo thứ tự tuổi nhỏ nhất => lớn nhất

// students.sort((a,b) => a.age - b.age);
// console.log(students)
