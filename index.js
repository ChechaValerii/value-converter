function celsiumToFahrenheit(number) {
  const Fahr = `${((number * 9) / 5) + 32}°F`;
  return Fahr;
}

function fahrenheitToCelsium(number) {
  const Cels = `${((number - 32) * 5) / 9}°C`;
  return Cels;
}

module.exports = {
  celsiumToFahrenheit,
  fahrenheitToCelsium,
};
