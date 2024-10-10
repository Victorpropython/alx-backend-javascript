import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }
  get floors() {
    return (this._floors);
  }

  set floors(value) {
    if (typeof this.floors !== 'number') {
      throw new TypeError('Floors must be a Number');
    }
    this._floors = floors;
  }
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
