const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],


  createTransaction(amount, type) {
    const { DEPOSIT, WITHDRAW } = Transaction;

    if (![DEPOSIT, WITHDRAW].includes(type)) {
      throw new Error('Invalid transaction type');
    }

    const id = Date.now();
    return { id, type, amount };
  },


  deposit(amount) {
    const { balance, transactions } = this;

    if (amount <= 0) {
      console.log('Deposit amount must be positive');
      return;
    }

    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);

    this.balance = balance + amount;
    this.transactions = [...transactions, transaction];
  },


  withdraw(amount) {
    const { balance, transactions } = this;
   
    if (amount <= 0) {
      console.log('Withdraw amount must be positive');
      return;
    }
    if (amount > balance) {
      console.log('Insufficient funds for withdrawal');
      return;
    }
    
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);

    this.balance = balance - amount;
    this.transactions = [...transactions, transaction];
  },


  getBalance() {
    const { balance } = this;
    return balance;
  },


  getTransactionDetails(id) {
    const { transactions } = this;

    const transaction = transactions.find(({ id: transactionId }) => transactionId === id);
    return transaction || null;
  },


  getTransactionTotal(type) {
    const { transactions } = this;
    const { DEPOSIT, WITHDRAW } = Transaction;
  
    if (![DEPOSIT, WITHDRAW].includes(type)) {
      console.log('Invalid transaction type');
      return 0;
    }
    
    return transactions
      .filter(({ type: transactionType }) => transactionType === type)
      .reduce((total, { amount }) => total + amount, 0);
  },
};


account.deposit(1000);
account.deposit(500);
account.withdraw(300);
console.log(account.getBalance()); 
console.log(account.getTransactionDetails(account.transactions[0].id)); 
console.log(account.getTransactionTotal(Transaction.DEPOSIT)); 
console.log(account.getTransactionTotal(Transaction.WITHDRAW)); 