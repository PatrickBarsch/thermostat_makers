'use strict';

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this._maximumTemperature = 25;
  }
  up() {
    if(this.temperature < this._maximumTemperature) this.temperature++ 
  }
  down() {
    if(this.temperature > this.MINIMUM_TEMPERATURE) this.temperature--; 
  }
  powerSavingModeOff(){
    this._maximumTemperature = 32;
  }

}