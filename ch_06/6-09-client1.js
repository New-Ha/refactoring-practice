import { acquireReading, baseRate } from './6-09.js';

const reading = acquireReading();

// baseCharge 역시 계속사용되고 관련성이 높으므로 Reading 안으로 옮겨준다.
// const baseCharge = reading.baseRate * reading.quantity;
console.log(reading.baseCharge);
