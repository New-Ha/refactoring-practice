import { acquireReading } from './6-09.js';

const reading = acquireReading();

export const taxableCharge = reading.taxableCharge;
console.log(taxableCharge);
