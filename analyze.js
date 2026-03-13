// Sample JavaScript code improved with GitHub Copilot suggestions
// Refactored: var → const/let, template literals, input validation, named constants

const DISCOUNT_THRESHOLD = 100;
const DISCOUNT_MULTIPLIER = 0.9;

function calculateTotal(items) {
    if (!Array.isArray(items) || items.length === 0) {
        return 0;
    }
    return items.reduce((total, item) => total + item.price, 0);
}

function processOrder(order) {
    if (!order || !Array.isArray(order.items)) {
        throw new Error("Invalid order: must contain an items array");
    }

    const items = order.items;
    let total = calculateTotal(items);
    console.log(`Order total: ${total}`);

    // Apply discount when total exceeds threshold
    if (total > DISCOUNT_THRESHOLD) {
        total = total * DISCOUNT_MULTIPLIER;
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
