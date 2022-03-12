// fahrenheit to celsius
// [23, 140, 212, 41] => [-5, 60, 100, 5]

const fahrenheit = [23, 140, 212, 41]
function getCelsius(fahrenheit ) {
    return fahrenheit.map(temperature => (temperature -32) * 5/9)
}