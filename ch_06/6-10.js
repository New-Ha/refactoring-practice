/** 여러 함수를 변환 함수로 묶기 -> 필요한 데이터를 모든 계산된 데이터를 포함하는 새 객체를 만듦
 * 변환함수는 변환함수를 호출하는 시점의 데이터를 가지고 계산된 데이터가 한 번 저장되고, 이 후 데이터가 변경되어도 업데이트 되지 않는다.
 * 따라서 원하는 시점마다 enrich함수를 계속 호출해야해 추가비용이 뱔생할 수 있다!
 * 따라서, 최근 객체지향 프로그래밍언어에서는 클래스와 데이터를 묶는 형식으로 많이 한다.(객체지향프로그래밍 언어의 장점을 활용!)
 */
import _ from 'lodash';

const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
    return reading;
}

export function enrichReading(original) {
    // spread나 Object.assign으로 복사할 수도 있지만, 얉은 복사만 이루어져 중첩객체는 새로 만들지 않는 문제점이 있어서 깊은 복사를 해야한다.
    // -> lodash 라이브러리에 깊은 복사를 해주는 함수를 사용!
    const result = _.cloneDeep(original);
    result.baseCharge = calculateBaseCharge(result);
    result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year));
    return result;
}

function taxThreshold(year) {
    return 0.1;
}

function calculateBaseCharge(reading) {
    return baseRate(reading.month, reading.year) * reading.quantity;
}

export function baseRate(month, year) {
    if (year === 2017 && month === 5) return 0.1;
    return 0.2;
}
