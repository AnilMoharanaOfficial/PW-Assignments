const costPerDish = 898;
const numberOfPerson = 89;

function calculateBill(costPerDish, numberOfPerson) {
  const totalBill = costPerDish * numberOfPerson;
  const billPerPerson = totalBill / numberOfPerson;

  return {
    totalBill: totalBill,
    billPerPerson: billPerPerson,
  };
}

const bill = calculateBill(costPerDish, numberOfPerson);

console.log(
  `Total Bill: ${bill.totalBill} and Bill Per Person: ${bill.billPerPerson}`
);
