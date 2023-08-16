/** (변환함수방법과의 차이점)) 
 * class의 get을 사용하면 데이터가 나중에 변경이 되어도
 * 변경된 데이터를 기반으로 해서 get하는 시점의 데이터를 기반으로 계산, 처리
 */
export class Reading {
    #customer;
    #quantity;
    #month;
    #year;
    constructor(data) {
        this.#customer = data.customer;
        this.#quantity = data.quantity;
        this.#month = data.month;
        this.#year = data.year;
    }

    get customer() {
        return this.#customer;
    }

    get quantity() {
        return this.#quantity;
    }

    get month() {
        return this.#month;
    }

    get year() {
        return this.#year;
    }

    get baseRate {
      if (this.#year === 2017 && this.#month === 5) return 0.1;
      return 0.2;
    }

    get baseCharge() {
      return this.baseRate * this.quantity;
    }

    get taxThreshold() {
      return 0.1;
    }

    get taxableCharge() {
      return Math.max(0, this.baseRate - this.taxThreshold(this.year))
    }
}

const reading = new Reading({
    customer: 'ivan',
    quantity: 10,
    month: 5,
    year: 2017,
});

export function acquireReading() {
    return reading;
}


