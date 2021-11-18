'use strict';

document.addEventListener("DOMContentLoaded", () => {
  
  const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.temperature
  }

  const thermostat = new Thermostat();
  updateTemperature();
  document.querySelector('#powersaving-toggle').style.background = 'green'

  document.querySelector('#temperature-up').addEventListener('click', () => {
    thermostat.up();
    updateTemperature();
  });

  document.querySelector('#temperature-down').addEventListener('click', () => {
    thermostat.down();
    updateTemperature();
  });

  document.querySelector('#temperature-reset').addEventListener('click', () => {
    thermostat.reset();
    updateTemperature();
  });

  document.querySelector('#powersaving-toggle').addEventListener('click', () => {
    thermostat.powerSavingMode();
    if(thermostat._powerSavingMode) {
      document.querySelector('#powersaving-toggle').style.background = 'green'
    } else {
      document.querySelector('#powersaving-toggle').style.background = 'red'
    }
  });

})