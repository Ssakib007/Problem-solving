const today = new Date();
console.log(today); /// 2025-08-14T09:02:45.380Z
const date = new Date("2062-10-09");
console.log(date); /// 2062-10-09T00:00:00.000Z
console.log(date.getMonth()); /// 9
console.log(date.getDay()); /// 1
console.log(date.getDate()); /// 9
const specificDate = new Date(2091, 0, 26);
console.log(specificDate); /// 2091-01-25T18:00:00.000Z
specificDate.setMonth(10);
console.log(specificDate.toLocaleString("en-GB")); /// 26/11/2091, 00:00:00


/// unix epoch
