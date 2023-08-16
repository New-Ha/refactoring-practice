// ver 1
// 객체의 주소를 바로 반환하는 대신, 복사해 새로운 객체를 반환!
// -> 1) Object.assign;
//    2) {...defaultOwner}
let defaultOwner = { firstName: '마틴', lastName: '파울러' };

export function getDefaultOwner() {
  return {...defaultOwner};
}
