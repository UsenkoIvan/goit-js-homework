// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта 
// (значение свойства name). Возвращает общую стоимость продукта (цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.

const products = [{
        name: 'Радар',
        price: 1300,
        quantity: 4
    },
    {
        name: 'Сканер',
        price: 2700,
        quantity: 3
    },
    {
        name: 'Дроид',
        price: 400,
        quantity: 7
    },
    {
        name: 'Захват',
        price: 1200,
        quantity: 2
    },
];
const calculateTotalPrice = function (allProdcuts, productName) {
    let total;
    for (let i = 0; i < allProdcuts.length; i += 1) {
        const products = allProdcuts[i];
        if (products.name === productName) {
            total = products.price * products.quantity
        }
    }
    return total;
};
console.log(calculateTotalPrice(products, 'Радар')); // 5200
console.log(calculateTotalPrice(products, 'Дроид')); // 2800

//============================================================================
// const products = [{
//         name: 'Радар',
//         price: 1300,
//         quantity: 4
//     },
//     {
//         name: 'Сканер',
//         price: 2700,
//         quantity: 3
//     },
//     {
//         name: 'Дроид',
//         price: 400,
//         quantity: 7
//     },
//     {
//         name: 'Захват',
//         price: 1200,
//         quantity: 2
//     },
// ];
// const calculateTotalPrice = function (allProdcuts, productName) {
//     let total;
//     for (const product of allProdcuts) {
//         //     console.log(product);
//         //     console.log(product.name);
//         if (product.name === productName) {
//             total = product.price * product.quantity;
//         }
//     }
//     return total;
// };
// console.log(calculateTotalPrice(products, 'Радар')); // 5200
// console.log(calculateTotalPrice(products, 'Дроид')); // 2800