const colorCombinations = [
  ['#00A0B0'],
  ['#6A4A3C'],
  ['#CC333F'],
  ['#EB6841'],
  ['#EDC951'],
]

runTypewriter()

async function getData() {
  try {
    const data = await fetch('/.netlify/functions/api')
      .then((res) => res.json())
      .catch((e) => e)
    return data
  } catch (e) {
    return e
  }
}

async function runTypewriter() {
  const sentences = await getData().then((data) =>
    data.data.map((d) => {
      {
        const word = d.ctx_[1]

        let sentence = ''
        word.forEach((el, i) => {
          if (i === 0) return
          sentence += el.ws == 1 ? ` ${el.w}` : `${el.w}`
        })
        console.log(sentence)
        return sentence
      }
    })
  )

  window.tw({
    // (C1) REQUIRED
    target: document.getElementsByClassName('desc')[0], // target html container
    //text : "Wow. Much text. Very paragraph. Such contents.", // text
    text: [...sentences],

    // (C2) OPTIONAL
    forward: 100, // delay between each character, default 100 ms
    backward: 20, // delay between each character, default 50 ms
    pause: 1000, // pause before next cycle, default 1 sec
    loop: true, // loop typewriter effect, default true
    cursor: true, // add fake cursor? default true
  })
}

document
  .getElementsByClassName('find-out')[0]
  .addEventListener('click', function () {
    // const desc =
    //   'ist stellvertretender Leiter des Ressorts Desk und Interaktion der gemeinsamen Redaktion der Berner Tageszeitungen «BernerZeitung» und «Der Bund». Er ist seit 2013 in Bern als Journalist tätig, unter anderem als Spezialist für Daten und digitales Storytelling. Er studierte Kommunikation an der ZHAW in Winterthur und hat einen CAS-Abschluss in Front End Engineering der HSR Rapperswil. Zuvor arbeitete er bei der Nachrichtenagentur SDA sowie als freier Mitarbeiter für diverse Lokalzeitungen im Raum Zürich.'
    document.getElementsByClassName('real-desc')[0].style.display = 'block'


    document.getElementsByClassName('fake-desc')[0].style.display = 'none'
    document.getElementsByClassName('real-name')[0].style.display = 'none'
  })

window.addEventListener('load', function () {
  document.querySelector('body').style.backgroundColor = colorCombinations[0]
})

document
  .getElementsByClassName('back')[0]
  .addEventListener('click', function () {
    // const desc =
    //   'ist stellvertretender Leiter des Ressorts Desk und Interaktion der gemeinsamen Redaktion der Berner Tageszeitungen «BernerZeitung» und «Der Bund». Er ist seit 2013 in Bern als Journalist tätig, unter anderem als Spezialist für Daten und digitales Storytelling. Er studierte Kommunikation an der ZHAW in Winterthur und hat einen CAS-Abschluss in Front End Engineering der HSR Rapperswil. Zuvor arbeitete er bei der Nachrichtenagentur SDA sowie als freier Mitarbeiter für diverse Lokalzeitungen im Raum Zürich.'
    document.getElementsByClassName('real-desc')[0].style.display = 'none'


    document.getElementsByClassName('fake-desc')[0].style.display = 'block'
    document.getElementsByClassName('real-name')[0].style.display = 'inline'
  })

window.addEventListener('load', function () {
  document.querySelector('body').style.backgroundColor = colorCombinations[0]
})