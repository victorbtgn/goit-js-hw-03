console.log(`Task 7`);

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const { DEPOSIT, WITHDRAW } = Transaction;

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const generateId = function() {
      return (
        '_' +
        Math.random()
          .toString(36)
          .substr(2, 9)
      );
    };
    const obj = {
      amount: amount,
      type: type,
      id: generateId(),
    };
    return obj;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    if (amount === 0) {
      return console.log(`Укажите сумму больше ноля!`);
    }
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, DEPOSIT));
    return;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount === 0) {
      return console.log(`Укажите сумму больше ноля!`);
    }
    if (amount > this.balance) {
      return console.log(`На вашем счету недостаточно средств!`);
    }
    this.balance -= amount;
    this.transactions.push(this.createTransaction(amount, WITHDRAW));
    return;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return `На вашем счету ${this.balance} кредитов`;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    let idTransaction;
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        idTransaction = transaction;
      }
    }
    return idTransaction;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return `Всего по ${type}: ${total} кредитов.`;
  },
};

account.deposit(10);
account.deposit(50);

console.log(account.getBalance());
console.log(account.transactions);

account.withdraw(30);

console.log(account.getBalance());
console.log(account.transactions);

account.withdraw(300);

console.log(account.getBalance());
console.log(account.transactions);

account.deposit(90);
account.withdraw(45);

console.log(account.getBalance());
console.log(account.transactions);

account.deposit(130);

console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));
console.log(account.getBalance());
