export function priceOrder(product, quantity, shippingMethod) {
    const baseCalPrice = getDiscountedPrice(product, quantity);
    const shippingCost = calShippingCost(baseCalPrice, quantity, shippingMethod);
    const price = baseCalPrice.basePrice - baseCalPrice.discount + shippingCost;
    return price;
}

function getDiscountedPrice(product, quantity) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    return { basePrice: basePrice, discount: discount };
}

function calShippingCost(baseCalPrice, quantity, shippingMethod) {
    const shippingPerCase =
        baseCalPrice.getDiscountedPrice > shippingMethod.discountThreshold
            ? shippingMethod.discountedFee
            : shippingMethod.feePerCase;
    return quantity * shippingPerCase;
}

// 사용 예:
const product = {
    basePrice: 10,
    discountRate: 0.1,
    discountThreshold: 10,
};

const shippingMethod = {
    discountThreshold: 20,
    feePerCase: 5,
    discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price);
