export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }

  // 예약 추가에 추가적인 기능으로 boolean 타입을 넣어 우선예약기능을 넣으려고 한다.
  // boolean으로 동작을 다르게 하는 함수(flag)는 좋지 않다!
  // 하지만 정말 필요한 경우라면, 기존 인자받는 곳에 추가하며 기본값을 지정해주어 기존에 사용하는 곳에서 오류가 나지 않게 하는 것이 좋다.
  addReservation(customer, isPriority = false) {
    this.#reservations.push(customer);
  }

  // 예약 확인
  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }
}
