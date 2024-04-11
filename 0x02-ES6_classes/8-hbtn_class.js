export default class HolbertonClass {
  constructor(size, location) {
    this.location = location;
    this.size = size;
  }

  get location() {
    return this._location;
  }

  get size() {
    return this._size;
  }

  set location(location) {
    this._location = location;
  }

  set size(size) {
    this._size = size;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
