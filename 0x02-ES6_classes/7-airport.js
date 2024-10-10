export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;

    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
  }

  get name() {
    return (this._name);
  }

  set name(value) {
    this._name = name;
  }

  get code() {
    return (this._code);
  }

  set code(value) {
    this._code = value;
  }

  get [Symbol.toStringTag]() {
    return `${this._name} ${this._code}`;
  }
}
