export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._code = code;
    this._name = name
  }
  //getter for code

  get code() {
    return (this._code);
  }
  set(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }
  //for name

  get name() {
    return (this._name);
  }
  set(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a strin');
    }
    this._name = value;
  }
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}