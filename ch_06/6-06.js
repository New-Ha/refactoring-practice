// 불변성 
// 내부에만 객체를 두고 함수만 외부에 두어 객체를 반환받도록 만듦 -> 외부에서는 객체를 건들 수 없게 함.
// but, 객체에 문제가 있다. -> 객체 자체는 mutable하지만 참조값을 전달하는 특성때문에 사용처에서 내용을 수정할 수 있다.
//=> 객체를 다른곳에 전달하거나 반환하거나 인자로 넘기면 예상치 못한 곳에서 변경할 수 있다.(위험!!)
let defaultOwner = { firstName: '마틴', lastName: '파울러' };

export function getDefaultOwner() {
  return defaultOwner;
}
