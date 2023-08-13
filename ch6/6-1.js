 /**
  * 함수 추출하기 
  */

export function printOwing(invoice) {
  let outstanding = 0;

  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');

  // calculate outstanding
  // outstanding(채무액)에 orders의 각 요소의 amount 값을 더한다.
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // record due date
  // date data를 불러온다.
  const today = new Date();
  // date를 변형해서 dueDate 로 저장한다.
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  //print details
  // 고객명과, 주문량, 주문일을 프린트
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
printOwing(invoice);
