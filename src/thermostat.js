'use strict';

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
  }
  up() {
    this.temperature++ 
  }
  down() {
    if(this.temperature > this.MINIMUM_TEMPERATURE) this.temperature--; 
  }

}