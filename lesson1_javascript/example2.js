let parkSlots = [undefined, undefined, undefined, undefined];

let car1 = {
    id: '0',
    owner: 'Khanh',
}
let car2 = {
    id: '2',
    owner: 'Dang',
}

const findEmptySlot = () => {
    // let emptySlot = parkSlots.findIndex((i) => {
    //     return i === undefined;
    // });

    let emptySlot;

    for (let i = 0; i < parkSlots.length; i++) {
        if (parkSlots[i] === undefined) {
            emptySlot = i;
            break;
        }
    }

    return emptySlot
}

const parkACar = (car) => {
    // Tìm ra vị trí còn trống
    let slotIndex = findEmptySlot(); //tìm vị trí trống

    parkSlots[slotIndex] = car; //gán xe vào vị trí trống
}

const countCars = () => {
    // return ra tổng số xe đang đỗ trong bãi
    let count = 0;
    for (let i = 0; i < parkSlots.length; i++) {
        if (parkSlots[i] !== undefined) {
            count = count + 1;
        }
    }
    return count;
}

// camelCase;
parkACar(car1);
parkACar(car2);
console.log(countCars());
console.log(parkSlots);