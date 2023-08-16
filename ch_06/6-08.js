/** 매개변수 객체만들기
 * 매개변수는 최대 3개를 넘지 않는 것이 좋다!
 * -> 연관있는 데이터 구조 하나(자료구조, 클래스 등)로 묶어주는 것이
 * 호출이 편하고, 어떤 인자를 필요로 하는지 명확하며, 호출할 때 실수를 줄여준다!
 */

// 정해진 범위를 벗어난 것을 filter하는 함수
// 매개변수가 아직 3개이나 더 많아지면 갯수가 많아지고 호출할 떄도 힘들어지니, 매개변수를 하나의 객체로 묶어주는 것이 좋다.
// 최대, 최소를 풀어서 전달하지 않고, 묶어진 객체를 전달!
export function readingsOutsideRange(station, range) {
  return station.readings.filter((r) => r.temp < range.temperatureFloor || r.temp > range.temperatureCeiling);
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

// 최대값과 최소값
// 순수데이터 객체
const operationPlan = {
  temperatureFloor: 51,
  temperatureCeiling: 53,
};


readingsOutsideRange(
  station,
  operationPlan
);
