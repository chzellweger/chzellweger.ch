const colorCombinations = [
  ['#00A0B0'],
  ['#6A4A3C'],
  ['#CC333F'],
  ['#EB6841'],
  ['#EDC951'],
]

const contentInterval = setInterval(() => {
  test()
}, 10000);

test()

window.addEventListener('load', function () {
  console.log('hello')
  document.querySelector('body').style.backgroundColor = colorCombinations[0]

  // const timeout = setTimeout(() => {
  //   let colorCombination = colorCombinations[Math.floor(Math.random() * 4)]
  //   document.querySelector('body').style.backgroundColor = colorCombination[0]
  // }, 10000)

  // const interval = setInterval(() => {
  //   let colorCombination = colorCombinations[Math.floor(Math.random() * 4)]
  //   document.querySelector('body').style.backgroundColor = colorCombination[0]
  // }, 10000)


})

document.getElementsByClassName('find-out')[0].addEventListener('click', function () {
  console.log('hello')

  const desc = "ist stellvertretender Leiter des Ressorts Desk und Interaktion der gemeinsamen Redaktion der Berner Tageszeitungen «BernerZeitung» und «Der Bund». Er ist seit 2013 in Bern als Journalist tätig, unter anderem als Spezialist für Daten und digitales Storytelling. Er studierte Kommunikation an der ZHAW in Winterthur und hat einen CAS-Abschluss in Front End Engineering der HSR Rapperswil. Zuvor arbeitete er bei der Nachrichtenagentur SDA sowie als freier Mitarbeiter für diverse Lokalzeitungen im Raum Zürich."
  document.getElementsByClassName('desc')[0].innerText = desc

  clearInterval(contentInterval)

  // document.getElementsByClassName('source')[0].style.display = 'none'
  document.getElementsByClassName('real-name')[0].style.display = 'none'
})

async function test() {
  const data = await fetch('/.netlify/functions/api').then(res => res.json()).catch(e => console.log(e))
  const word = data.data[1].ctx_[1]

  let sentence = ''

  word.forEach((el,i) => {
    if (i === 0) return

    console.log(el.w)
    sentence += el.ws == 1 ? ` ${el.w}` : `${el.w}`
  })

  // document.getElementsByClassName('desc')[0].innerText = sentence

  window.tw({
    // (C1) REQUIRED
    target : document.getElementsByClassName('desc')[0], // target html container
    //text : "Wow. Much text. Very paragraph. Such contents.", // text
    text : [sentence],
  
    // (C2) OPTIONAL
    forward : 40, // delay between each character, default 100 ms
    backward : 20, // delay between each character, default 50 ms
    pause : 10000, // pause before next cycle, default 1 sec
    loop : false, // loop typewriter effect, default true
    cursor : true // add fake cursor? default true
  });
  
  
}