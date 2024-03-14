const user = {
  name: "Anil",
  balance: 1000,
};

// Deposit money
const deposit = (amount) => {
  user.balance += amount;
  console.log(
    `Successfully deposited ${amount} INR. Current balance: ${user.balance} INR`
  );
};

// Withdraw money
const withdraw = (amount) => {
  if (user.balance >= amount) {
    user.balance -= amount;
    console.log(
      `Successfully withdrawn ${amount} INR. Current balance: ${user.balance} INR`
    );
  } else {
    console.log("Insufficient funds. Withdrawal failed.");
  }
};

console.log("Initial balance:", user.balance);
deposit(500);
withdraw(200);
