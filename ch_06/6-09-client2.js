import { acquireReading } from './6-09.js';

const reading = acquireReading();

// Reading 안으로 옮겨준다.
// function taxThreshold(year) {
//   return 0.1;
// }
// export const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

export const taxableCharge = reading.taxableCharge;
console.log(taxableCharge);
