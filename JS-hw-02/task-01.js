const logItems = function (array) {
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    count += 1;
    console.log(`${i + 1} - ${array[i]}`);
  }
};
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);