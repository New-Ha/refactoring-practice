export function isDeliveryFree(anOrder) {
  // 한눈에 봐도 이해가능하고 짧고 간결한데도 굳이 변수로 추출했다면 다시 인라인 해주자!
  let basePrice = anOrder.basePrice;
  return basePrice > 1000;
}
