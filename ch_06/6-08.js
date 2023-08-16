
export function readingsOutsideRange(station, range) {
  return station.readings.filter((r) => r.temp < range.min || r.temp > range.max);
}

// 온도가 범위내인지 검사하는 함수를 따로 두면 더 유용할 수 있다.
export class NumberRange {
  #min;
  #max;
  constructor(min, max) {
    this.#min = min;
    this.#max = max;
  }

  get min() {
    return this.#min;
  }

  get max() {
    return this.#max;
  }
}

//온도에 대한 기록
const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};


// 순수데이터 객체 -> 만든 클래스를 사용해 값을 전달해준다.
// 매번 긴 이름의 데이터를 사용할 필요가 없다.
const operationPlan = new NumberRange(51, 53)


const result = readingsOutsideRange(
  station,
  operationPlan
);
console.log(result)