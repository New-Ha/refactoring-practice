export function priceOrder(product, quantity, shippingMethod) {
    const basePrice = calculateBasePrice(product, quantity);
    const discount = calculateDiscount(product, quantity);

    // 총 배송비
    const shippingCost = calculateSippingCost(quantity, shippingMethod);

    //총 가격
    const price = basePrice - discount + shippingCost;
    return price;
}

function calculateBasePrice(product, quantity) {
    return product.basePrice * quantity;
}

function calculateDiscount(product, quantity) {
    return Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
}

function calculateSippingCost(quantity, shippingMethod) {
    const shippingPerCase =
        basePrice > shippingMethod.discountThreshold ? shippingMethod.discountedFee : shippingMethod.feePerCase;

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
