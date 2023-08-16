//6-06 함수 사용처
import { getDefaultOwner } from './6-6.js';

const owner = getDefaultOwner();
// class로 만들어 전달된 경우, 에러가 난다. getter만 있고 setter는 없기 때문
// owner.firstName = '엘리';
console.log(owner);
console.log(getDefaultOwner());
