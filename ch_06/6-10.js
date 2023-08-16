/** 여러 함수를 변환 함수로 묶기 -> 필요한 데이터를 모든 계산된 데이터를 포함하는 새 객체를 만듦
 * 하지만, 최근 객체지향 프로그래밍언어에서는 클래스와 데이터를 묶는 형식으로 많이 한다.(객체지향프로그래밍 언어의 장점을 활용!)
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

function calculateBaseCharge(reading) {
    return baseRate(reading.month, reading.year) * reading.quantity;
}

export function baseRate(month, year) {
    if (year === 2017 && month === 5) return 0.1;
    return 0.2;
}
