//6-06 함수 사용처
import { getDefaultOwner } from './6-6.js';

// 함수를 호출해 owner에 할당하고
const owner = getDefaultOwner();
// owner의 내용을 바꾸면 함수의 객체도 바뀐다. -> 객체가 참조값이어서
owner.firstName = '엘리';
console.log(owner);
console.log(getDefaultOwner());
