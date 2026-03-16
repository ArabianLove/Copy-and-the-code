// Sample JavaScript code for GitHub Copilot analysis

function calculateTotal(items) {
    if (!Array.isArray(items)) return 0;
    return items.reduce((total, item) => total + (Number(item?.price) || 0), 0);
}

function processOrder(order) {
    if (!order || !order.items) {
        console.error("Invalid order: missing items");
        return 0;
    }
    const items = order.items;
    let total = calculateTotal(items);
    console.log(`Order total: ${total}`);

    // Apply discount
    if (total > 100) {
        total *= 0.9;
    }

    return total;
}

// Example usage
const sampleOrder = {
    items: [
        { name: "Item 1", price: 50 },
        { name: "Item 2", price: 75 }
    ]
};

processOrder(sampleOrder);
