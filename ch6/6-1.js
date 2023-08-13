  /**  함수 추출하기  
  * 가능하면 printOwing 에서 호출하는 순서대로 함수를 적어주는 것이 좋다.
  */

export function printOwing(invoice) {
  // 단순하게 배너를 출력 -> 함수이름으로 만든다.
  printBanner();
   
  // outstanding 값을 return 해야하고, invoice객체를 사용해야 함을 염두하며 추출해야 한다.
  let outstanding = calculateOutstanding(invoice);

  // 기존 invoice 객체를 변형하는 느낌이 드는 함수명을 짓는다.
  recordDueDate(invoice);

  // 세부사항 프린트에 invoice와 outstanding이 필요!
  printDetails(invoice, outstanding);
  
}

function printBanner() {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

function calculateOutstanding(invoice) {
  // outstanding 대신, 함수 내에서 반환하는 값이 목표라면 이름을 result로 많이 사용한다.
  // 이렇게 해주면 결과값을 반환해야하는 함수임을 바로 알 수 있다. + 마지막에 result를 반환하는 지도 확인할 수 있다.
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}

function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function printDetails(invoice, outstanding) {
  // 참조하는 이름들이 인자들과 매치되는 지도 확인!!
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
printOwing(invoice);
