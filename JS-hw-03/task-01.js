// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = 'happy';
console.log(user);

user.hobby = 'skydiving';
console.log(user);

user.premium = false;
console.log(user);

const keys = Object.keys(user);
console.log(keys);

for (const key of keys) {
    console.log(`key:${key} value:${user[key]}`);
}

// const entries = Object.entries(user);
// console.log(user);
// for (const entry of entries) {
//     const key = entry[0];
//     const value = entry[1];
//     console.log(`${key}: ${value}`);
// };