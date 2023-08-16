// 함수에 매개변수가 여러개라면 그 중에 하나의 객체로 묶을 수 있는 것을 찾아보고
// 그 객체 안에 더 유용한 함수를 만들 수 있나 고민해보자!


export function readingsOutsideRange(station, range) {
  return station.readings.filter((r) => !range.contains(r.temp));
}

// 온도가 범위내인지 검사하는 함수를 따로 두면 더 유용할 수 있다.
// 데이터를 담고 있는 객체와 처리하는 로직이 분리되어 있기 보다는 함께 있는 것이 좋고, 원래 로직을 처리하던 곳에서는 의미있는 이름을 부여해 가독성을 높일 수 있다.
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

  contains(number) {
    return number >= this.#min && number <= this.#max;
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