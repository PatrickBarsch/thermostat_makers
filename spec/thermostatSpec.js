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
  it('has a minimum temperature', () => {
    while(thermostat.temperature > (thermostat.MINIMUM_TEMPERATURE) ) {
      thermostat.down();
    };
    thermostat.down();
    expect(thermostat.temperature).toEqual(thermostat.MINIMUM_TEMPERATURE)
  });
  it('has a maximum temperature of 25, when in PowerSaving mode', () => {
    while(thermostat.temperature < (thermostat.getMaximumTemperature()) ) {
      thermostat.up();
    };
    thermostat.up();
    expect(thermostat.temperature).toEqual(25)
  });
  it('has a maximum temperature of 32, when NOT in PowerSaving mode', () => {
    thermostat.powerSavingMode();
    while(thermostat.temperature < (thermostat.getMaximumTemperature()) ) {
      thermostat.up();
    };
    thermostat.up();
    expect(thermostat.temperature).toEqual(32)
  });

  it('resets the temperature to 20', () => {
    thermostat.up();
    thermostat.up();
    thermostat.reset();

    expect(thermostat.temperature).toEqual(20);
  });
  it('indicates the energy usage', () => {
    thermostat.powerSavingMode();
    expect(thermostat.energyUsage()).toEqual("medium-usage")

    while(thermostat.temperature > (thermostat.MINIMUM_TEMPERATURE) ) {
      thermostat.down();
    };
    expect(thermostat.energyUsage()).toEqual("low-usage")

    while(thermostat.temperature < (thermostat.getMaximumTemperature()) ) {
      thermostat.up();
    };
    expect(thermostat.energyUsage()).toEqual("high-usage")
  })
});