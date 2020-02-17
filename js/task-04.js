class StringBuilder {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  set value(newStr) {
    this._value = newStr;
  }

  append(str) {
    this.value += str;
  }

  prepend(str) {
    this.value = str + this.value;
  }

  pad(str) {
    this.value = str + this.value + str;
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
