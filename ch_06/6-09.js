// data와 사용처(6-09-client1, 2, 3)가 흩어져 있는 나쁜 코드
// 코드 중복 + 재사용성 떨어지고 + 유지보수 안됨
// => 응집시켜 클래스화 + 캡슐화

const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}

export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}
