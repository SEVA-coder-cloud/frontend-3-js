const weather = {
  "temperature": 22,
  "humidity": 65,
  "whispered": function() {
    if (this.temperature > 30) {
      return "Жарко!";
    } else if (this.temperature < 0) {
      return "Мороз!";
    }
    return "Погода нормальна.";
  }
};

const bankAccount = {
  "ownerName": "Іван Іванов",
  "accountNumber": "1234567890",
  "balance": 5000.75,
  "withdraw": function(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return true;
    }
    return false;
  }
};

const user = {
  "email": "user@example.com",
  "password": "secret123",
  "login": function(inputEmail, inputPassword) {
    return this.email === inputEmail && this.password === inputPassword;
  }
};

const movie = {
  "title": "Інтерстеллар",
  "director": "Крістофер Нолан",
  "year": 2014,
  "rating": 8.6,
  "isGood": function() {
    return this.rating >= 7;
  }
};