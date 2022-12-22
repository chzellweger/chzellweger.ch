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

async function test() {
  const data = await fetch('/.netlify/functions/api').then(res => res.json()).catch(e => console.log(e))
  const word = data.data[1].ctx_[1]
  console.log(word)

  let sentence = 'Christian Zellweger'

  word.forEach((el,i) => {
    if (i === 0) return

    console.log(el.w)
    sentence += el.ws == 1 ? ` ${el.w}` : `${el.w}`
  })

  console.log(sentence)
  document.getElementsByClassName('content')[0].innerText = sentence
}

test()