import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;

    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a Number');
    }
  }


  get floors() {
    return (this._floors);
  }


  evacutionWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }

}
