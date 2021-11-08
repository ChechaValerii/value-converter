function celsiumToFahrenheit(number) {
  const Fahr = `${((number * 9) / 5) + 32}°F`;
  return Fahr;
}

function fahrenheitToCelsium(number) {
  const Cels = `${((number - 32) * 5) / 9}°C`;
  return Cels;
}

function metersToFeet(number) {
  const Feet = `${number * 3.281} ft`;
  return Feet;
}

function feetToMeters(number) {
  const Metre = `${number / 3.281} mt`;
  return Metre;
}

function lightsecondToKm(number) {
  const Km = `${number * 299792} km`;
  return Km;
}

function kmToLightsecond(number) {
  const Ls = `${(number / 299792).toFixed(7)} light second(s)`;
  return Ls;
}

module.exports = {
  celsiumToFahrenheit,
  fahrenheitToCelsium,
  metersToFeet,
  feetToMeters,
  lightsecondToKm,
  kmToLightsecond,
};
