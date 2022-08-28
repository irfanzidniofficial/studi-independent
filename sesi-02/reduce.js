let orders = [{ total: 325 }, { total: 512 }, { total: 128 }, { total: 32 }];

// let total = 0;

// for (let i = 0; i < orders.length; i++) {
//   total = total + orders[i].total;
// }

// console.log(total);

// reduce

let total = orders.reduce((total, order) => total + order.total, 0);

console.log(total);
