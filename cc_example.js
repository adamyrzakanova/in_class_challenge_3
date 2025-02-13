// Task 5 

let orders = [
    { id: 101, customer: "Alice", total: 300 },
    { id: 102, customer: "Bob", total: 450 },
    { id: 103, customer: "Charlie", total: 200 }
];

function findOrders(orders, orderId) {
    return orders.find(order => order.id === orderId);
}

some_order = findOrders(orders, 101);
console.log(`${some_order.customer} has an order id ${some_order.id} with a total of ${some_order.total}`);


