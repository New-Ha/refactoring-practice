import { acquireReading, enrichReading } from './6-10.js';

// 날것의 reading 데이터를 받아와
const rawReading = acquireReading();
// enrichReading 함수를 통해 날것의 데이터를 계산된 필요한 데이터가 담긴 새 객체를 받아온다.
const reading = enrichReading(rawReading);

console.log(reading.baseCharge);
console.log(reading.taxableCharge);
