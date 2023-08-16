// 객체의 state 가 필요한 곳에서 객체 전체를 받고 있다.
// 재사용자가 state정보만 가지고 있다면 함수를 재사용하기가 어렵다.
// 함수 내부에서 필요한 것만 받아와 외부 의존성을 낮추어 재사용성을 높일 수 있다!!

export function inNewEngland(state) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}
