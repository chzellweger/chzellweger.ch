const colorCombinations = [
  ['#00A0B0'],
  ['#6A4A3C'],
  ['#CC333F'],
  ['#EB6841'],
  ['#EDC951'],
]

window.addEventListener('load', function () {
  console.log('hello')

  const timeout = setTimeout(() => {
    let colorCombination = colorCombinations[Math.floor(Math.random() * 4)]
    document.querySelector('body').style.backgroundColor = colorCombination[0]
  }, 10000)

  const interval = setInterval(() => {
    let colorCombination = colorCombinations[Math.floor(Math.random() * 4)]
    document.querySelector('body').style.backgroundColor = colorCombination[0]
  }, 10000)
})

function test() {
  fetch('/.netlify/functions/api').then(res => res.json).then(json => console.log(json))
}

test()