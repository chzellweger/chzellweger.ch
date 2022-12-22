
function tw (instance) {
  // (A) SET DEFAULT OPTIONS
  if (instance.forward === undefined) { instance.forward = 100; }
  if (instance.backward === undefined) { instance.backward = 50; }
  if (instance.pause === undefined) { instance.pause = 1000; }
  if (instance.loop === undefined) { instance.loop = true; }
  if (instance.cursor === undefined) { instance.cursor = true; }
  if (typeof instance.text != "object") { instance.text = [instance.text]; }

  // (B) PROPERTIES & FLAGS
  instance.current = 0;      // current text
  instance.pointer = 0;      // current character
  instance.direction = true; // true forward, false backward
  instance.draw = true;      // continue to "type text"?

  // (C) TYPEWRITER EFFECT
  if (instance.cursor) { instance.target.classList.add("cursor"); }
  instance.typist = () => {
    // (C1) NEXT CHARACTER
    if (instance.direction) {
      instance.pointer++;
      instance.draw = instance.pointer <= instance.text[instance.current].length;
    } else {
      instance.pointer--;
      instance.draw = instance.pointer >= 0;
    }

    // (C2) DRAW HTML
    if (instance.draw) {
      instance.target.innerHTML = instance.text[instance.current].substring(0, instance.pointer);
    }

    // (C3) PAUSE & LOOP?
    else {
      // (C3-1) CLEAR TIMER + REVERSE DIRECTION
      clearInterval(instance.timer);
      instance.direction = !instance.direction;

      // (C3-2) NEXT BLOCK OF TEXT
      if (instance.direction) {
        instance.current++;
        if (instance.loop && instance.current == instance.text.length) {
          instance.current = 0;
        }

        if (instance.current <= instance.text.length) {
          instance.timer = setTimeout(() => {
            instance.timer = setInterval(instance.typist, instance.forward);
          }, instance.pause);
        }
      }

      // (C3-3) PAUSE THEN CLEAR TEXT
      else {
        instance.timer = setTimeout(() => {
          instance.timer = setInterval(instance.typist, instance.backward);
        }, instance.pause);
      }
    }
  };

  // (D) START
  instance.timer = setInterval(instance.typist, instance.forward);
}

tw({
  // (C1) REQUIRED
  target : document.getElementById("demo"), // target html container
  //text : "Wow. Much text. Very paragraph. Such contents.", // text
  text : [
  "ist stv. Leiter des Ressorts Desk/Interaktion der Berner Tageszeitung «Berner Zeitung» / «Der Bund». Er ist seit 2013 in Bern als Journalist tätig",
  ],

  // (C2) OPTIONAL
  forward : 80, // delay between each character, default 100 ms
  backward : 40, // delay between each character, default 50 ms
  pause : 1500, // pause before next cycle, default 1 sec
  loop : true, // loop typewriter effect, default true
  cursor : true // add fake cursor? default true
});

