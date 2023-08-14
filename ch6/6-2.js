/** 함수 인라인하기
 */

// 예제 1
// 등급을 메기는 함수
// 함수이름 그대로 코드가 작성되어 있고, 딱 한줄, 잘 지어진 객체 속성을 이용 
// -> 특정조건을 검사하고 반복적으로 쓰이고, 조건이 변경가능해 추후에 유지보수하기 편하다면 굳이 추출할 필요가 없었다.
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}



// 예제 2
// 주어진 고객을 토대로 정보를 모아, 데이터를 리턴하는 함수
// 불필요한 간접호출 -> 인라인하고 이름을 확인!!
// 그리고 함수안에서 지역변수를 만들어 변수의 값을 리턴하는 경우, 변수명을 따로 쓰는 것보다는 result로 쓰는 것이 좋다. 
function reportLines(customer) {
  const result = [];
  result.push(['name', customer.name]);
  result.push(['location', customer.location]);
  return result;
}

