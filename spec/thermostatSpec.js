'use strict';

describe('Thermostat', function(){
  let thermostat;
  beforeEach(() => {
    thermostat = new Thermostat;
  });
  it('has a default temperature of 20', function() {
    expect(thermostat.temperature).toEqual(20)
  });

  it('increases teamperature', function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21)
  });
});