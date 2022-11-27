const colorCombinations = [
  ['#00A0B0'],
  ['#6A4A3C'],
  ['#CC333F'],
  ['#EB6841'],
  ['#EDC951'],
]

window.addEventListener('load', function () {
  console.log('hello')
  const colorCombination = colorCombinations[Math.floor(Math.random() * 4)]
  document.querySelector('body').style.backgroundColor = colorCombination[0]
})
