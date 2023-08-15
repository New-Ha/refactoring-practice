import { acquireReading, baseRate } from './6-09.js';

const aReading = acquireReading();

const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
console.log(baseCharge);
