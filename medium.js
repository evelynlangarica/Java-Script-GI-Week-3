var sharePizza = cutPizzaSlices(8);
function cutPizzaSlices(y) {
    return function sharePizza(x) {
        return `Each person gets ${y / x}.00 slices of pizza.`;
    }
};
console.log(sharePizza(2));
console.log(sharePizza(3));