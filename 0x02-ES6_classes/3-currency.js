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
  get(code) {
    return (this._code);
  }
  set(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
  }
  //for name
  get(name) {
    return (this._name);
  }
  set(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a strin');
    }
  }
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}