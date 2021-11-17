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

  it('decreases teamperature', function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19)
  });
  it('has a minimum temperature of 10', () => {
    while(thermostat.temperature >= (thermostat.MINIMUM_TEMPERATURE - 1) ) {
      thermostat.down()
    }
    expect(thermostat.temperature).toEqual(10)
  });
});