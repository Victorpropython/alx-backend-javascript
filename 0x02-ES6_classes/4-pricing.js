import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;

    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a Number');
    }

    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
  }

  get amount() {
    return (this._amount);
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a Number');
    }
    this._amount = value;
  }

  get currency() {
    return (this._currency);
  }

  set currency(value) {
    if (!(Currency instanceof Currency)) {
      throw new TypeError('Currency must be a Currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
