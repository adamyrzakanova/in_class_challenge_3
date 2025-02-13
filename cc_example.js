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
    
