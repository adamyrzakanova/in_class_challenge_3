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



// Task 6

let inventory = {
    Items :[],
    addItem(name, quantity){
        //This method adds an item to items array
        this.Items.push({name, quantity});  
    },
    removeLatestItem() {
        //this method removes the last item
        this.Items.pop();
    },
    removeFirstItem() {
        //this method removes the first item
        this.Items.shift();
    }
    };
    inventory.addItem("Monitor", 5);
    inventory.addItem("Keyboard", 10);
    inventory.addItem("Mouse", 3);

    console.log(inventory.Items);//Viewing all items 
    inventory.removeLatestItem();//Removing the last items
    console.log(inventory.Items);//Viewing items remaining
    inventory.removeFirstItem();``//Removing the first item
    console.log(inventory.Items);//Viewing items remaining.
    //inventory.removeFirstItem(); //Removing the first item
    //console.log(inventory.Items);//Viewing items remaining.

    // Task 7

    let employees = [
        { name: "Alice", position: "Developer", salary: 70000 },
        { name: "Bob", position: "Designer", salary: 60000 },
        { name: "Charlie", position: "Manager", salary: 90000 }
    ];
   
    function findEmployee(employees, name) {
        return employees.find(employee => employee.name === name);
    }
    console.log(findEmployee(employees, "Charlie"));

    // Task 8
    let ordersA = [
        { id: 1, customer: "Alice" },
        { id: 2, customer: "Bob" },
    ];
    let ordersB = [
        { id: 3, customer: "Charlie" },
        { id: 4, customer: "David" },
    ];

    function combineOrders(ordersA, ordersB) {
        return [...ordersA, ...ordersB];    
    }
    console.log(combineOrders(ordersA, ordersB));   



        



