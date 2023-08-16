// ver 2
//{...defaultOwner}은 얕은 복사가 일어나기 때문에, 중첩객체라면 내부 객체는 그대로 참조값을 써서 위험할 수 있다.
// class를 만들면 get만 제공하므로 수정할 수 없는 클래스가 된다.

class Person {
  #lastName;
  #firstName;
  constructor(data) {
    this.#lastName = data.lastName;
    this.#firstName = data.firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  get firstName() {
    return this.#firstName;
  }
}

let defaultOwner = new Person({ firstName: '마틴', lastName: '파울러' });

export function getDefaultOwner() {
  return {...defaultOwner};
}
