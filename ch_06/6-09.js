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

    // 밀접하게 관련 있는 계산이므로 안으로 위치하면서 함수가 아닌 get으로 만들어두면 속성에 접근하듯 사용 가능
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


