'use strict';

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this._powerSavingMode = true;
  }
  up() {
    if(this.temperature < this.getMaximumTemperature()) this.temperature++ 
  }
  down() {
    if(this.temperature > this.MINIMUM_TEMPERATURE) this.temperature--; 
  }
  powerSavingMode() {
    this._powerSavingMode = this._powerSavingMode ? false : true
  }
  getMaximumTemperature() {
    return this._powerSavingMode ? 25 : 32
  }
  reset() {
    this.temperature = 20
  }

}