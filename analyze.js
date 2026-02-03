// Sample JavaScript code for GitHub Copilot analysis
// This code has some issues that Copilot can help identify and fix

function calculateTotal(items) {
    var total = 0;
    for (var i = 0; i < items.length; i++) {
        total = total + items[i].price;
    }
    return total;
}

function processOrder(order) {
    var items = order.items;
    var total = calculateTotal(items);
    console.log("Order total: " + total);
    
    // Apply discount
    if (total > 100) {
        total = total * 0.9;
    }
    
    return total;
}

// Example usage
var sampleOrder = {
    items: [
        { name: "Item 1", price: 50 },
        { name: "Item 2", price: 75 }
    ]
};

processOrder(sampleOrder);
