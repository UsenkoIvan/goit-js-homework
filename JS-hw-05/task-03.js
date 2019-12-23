class Storage {
    constructor(arr = []) {
        this.arr = arr;
    }
    getItems() {
        return this.arr;
    }
    addItem(item) {
        this.arr.push(item);
    }
    removeItem(item) {
        for (let i = 0; i < this.arr.length; i += 1) {
            if (item === this.arr[i]) {
                this.arr.splice(i, 1);
            }
        }
    }
}

const storage = new Storage([
    "Нанитоиды",
    "Пролонгер",
    "Железные жупи",
    "Антигравитатор"
]);
const arr = storage.getItems();
console.table(storage.arr); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
storage.addItem("Дроид");
console.table(arr); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
storage.removeItem("Пролонгер");
console.table(storage.arr); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]