const startKnop = document.querySelector(".startbutton")
const EndTimer = document.querySelector("h1")
let bombTimeLeft = document.querySelector("h1")
let timeLeft = 300 /* Tijd in seconden voor de timer */
let module2 = document.querySelector(".module2")
let module1 = document.querySelector(".module1")
let module3 = document.querySelector(".module3")


function bombTimer() {
  let minutes = Math.floor(timeLeft / 60)
  let seconds = timeLeft % 60
  bombTimeLeft.textContent = (minutes + ":" + seconds)

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  bombTimeLeft.textContent = (minutes) + ":" + (seconds)
}


function startcountdown() {
  bombTimer()

  const tijdsInterval = setInterval(() => {
    timeLeft--
    bombTimer()
    timeCheck()
    /*         console.log(timeLeft) */ /* Dit is om de tijd left te zien in de console */

    if (timeLeft <= 0 || AttemptsLeft == 0) {
      clearInterval(tijdsInterval)
      /* bombTimeLeft.textContent == "00:00" */
      bodyElement.classList.add("kaboom")
      obstructGame()
      /* bombTimeLeft.replaceWith(EndTimer).textContent = "00:00" */
      let ExplosionSound = new Audio("audio/audio_boom.mp3")
      ExplosionSound.play()
    }
  }, 1000)
}



function UNobstructGame() {
  module1.classList.remove("obstructModule")
}
function obstructGame() {
  module1.classList.add("obstructModule")
  module2.classList.add("obstructModule")
  module3.classList.add("obstructModule")
}

startKnop.addEventListener("click", startcountdown) /* de start knop die de bovenste fucnties aanzetten*/
startKnop.addEventListener("click", UNobstructGame)

/* //////////////////////////////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////// Module 1 //////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////////////////////////////// */

const Geheimnummer1 = Math.floor(Math.random() * 10)
const Geheimnummer2 = Math.floor(Math.random() * 10)
const Geheimnummer3 = Math.floor(Math.random() * 10)
const Geheimnummer4 = Math.floor(Math.random() * 10) /* als je *10 doet dan kan het uiteindelijke Oplossing bijv. 10669 worden */

const oplossing = `${Geheimnummer1}${Geheimnummer2}${Geheimnummer3}${Geheimnummer4}`

console.log("De geheime code is: " + oplossing)



/* Oplossing nummer invoer */
/* Numpad systeem */
const invoer1 = document.querySelector(".Invoer1")
const invoer2 = document.querySelector(".Invoer2")
const invoer3 = document.querySelector(".Invoer3")
const invoer4 = document.querySelector(".Invoer4")


let numPad1 = document.querySelector(".numPad1")
let numPad2 = document.querySelector(".numPad2")
let numPad3 = document.querySelector(".numPad3")
let numPad4 = document.querySelector(".numPad4")
let numPad5 = document.querySelector(".numPad5")
let numPad6 = document.querySelector(".numPad6")
let numPad7 = document.querySelector(".numPad7")
let numPad8 = document.querySelector(".numPad8")
let numPad9 = document.querySelector(".numPad9")
let numPad0 = document.querySelector(".numPad0")
/* Numpad systeem */

/* nummer invoer systeem */

/* ////////////////////////////////////////////////////////invoer systeem 2.0 */
function nummerinvoer1() {

  if (invoer1.textContent === ".") {
    invoer1.textContent = 1
  } else if (invoer2.textContent === ".") {
    invoer2.textContent = 1
  } else if (invoer3.textContent === ".") {
    invoer3.textContent = 1
  } else if (invoer4.textContent === ".") {
    invoer4.textContent = 1
  }
}

function nummerinvoer2() {

  if (invoer1.textContent === ".") {
    invoer1.textContent = 2
  } else if (invoer2.textContent === ".") {
    invoer2.textContent = 2
  } else if (invoer3.textContent === ".") {
    invoer3.textContent = 2
  } else if (invoer4.textContent === ".") {
    invoer4.textContent = 2
  }
}

function nummerinvoer3() {

  if (invoer1.textContent === ".") {
    invoer1.textContent = 3
  } else if (invoer2.textContent === ".") {
    invoer2.textContent = 3
  } else if (invoer3.textContent === ".") {
    invoer3.textContent = 3
  } else if (invoer4.textContent === ".") {
    invoer4.textContent = 3
  }
}

function nummerinvoer4() {

  if (invoer1.textContent === ".") {
    invoer1.textContent = 4
  } else if (invoer2.textContent === ".") {
    invoer2.textContent = 4
  } else if (invoer3.textContent === ".") {
    invoer3.textContent = 4
  } else if (invoer4.textContent === ".") {
    invoer4.textContent = 4
  }
}

function nummerinvoer5() {

  if (invoer1.textContent === ".") {
    invoer1.textContent = 5
  } else if (invoer2.textContent === ".") {
    invoer2.textContent = 5
  } else if (invoer3.textContent === ".") {
    invoer3.textContent = 5
  } else if (invoer4.textContent === ".") {
    invoer4.textContent = 5
  }
}

function nummerinvoer6() {

  if (invoer1.textContent === ".") {
    invoer1.textContent = 6
  } else if (invoer2.textContent === ".") {
    invoer2.textContent = 6
  } else if (invoer3.textContent === ".") {
    invoer3.textContent = 6
  } else if (invoer4.textContent === ".") {
    invoer4.textContent = 6
  }
}

function nummerinvoer6() {

  if (invoer1.textContent === ".") {
    invoer1.textContent = 6
  } else if (invoer2.textContent === ".") {
    invoer2.textContent = 6
  } else if (invoer3.textContent === ".") {
    invoer3.textContent = 6
  } else if (invoer4.textContent === ".") {
    invoer4.textContent = 6
  }
}

function nummerinvoer7() {

  if (invoer1.textContent === ".") {
    invoer1.textContent = 7
  } else if (invoer2.textContent === ".") {
    invoer2.textContent = 7
  } else if (invoer3.textContent === ".") {
    invoer3.textContent = 7
  } else if (invoer4.textContent === ".") {
    invoer4.textContent = 7
  }
}

function nummerinvoer8() {

  if (invoer1.textContent === ".") {
    invoer1.textContent = 8
  } else if (invoer2.textContent === ".") {
    invoer2.textContent = 8
  } else if (invoer3.textContent === ".") {
    invoer3.textContent = 8
  } else if (invoer4.textContent === ".") {
    invoer4.textContent = 8
  }
}

function nummerinvoer9() {

  if (invoer1.textContent === ".") {
    invoer1.textContent = 9
  } else if (invoer2.textContent === ".") {
    invoer2.textContent = 9
  } else if (invoer3.textContent === ".") {
    invoer3.textContent = 9
  } else if (invoer4.textContent === ".") {
    invoer4.textContent = 9
  }
}

function nummerinvoer0() {

  if (invoer1.textContent === ".") {
    invoer1.textContent = 0
  } else if (invoer2.textContent === ".") {
    invoer2.textContent = 0
  } else if (invoer3.textContent === ".") {
    invoer3.textContent = 0
  } else if (invoer4.textContent === ".") {
    invoer4.textContent = 0
  }
}

/* ////////////////////////////////////////////////////////invoer systeem 2.0 */
/* nummer invoer systeem */
/* Reset knop */

const submit = document.querySelector(".submit")

let ingeving = invoer1.textContent + invoer2.textContent + invoer3.textContent + invoer4.textContent

let AttemptsLeft = 10
/* Feedback text declaration */

const feedback1 = document.querySelector(".feedback1")
const feedback2 = document.querySelector(".feedback2")
const feedback3 = document.querySelector(".feedback3")
const feedback4 = document.querySelector(".feedback4")
const feedback5 = document.querySelector(".feedback5")
const feedback6 = document.querySelector(".feedback6")
const feedback7 = document.querySelector(".feedback7")
const feedback8 = document.querySelector(".feedback8")
const feedback9 = document.querySelector(".feedback9")

let feedback1_1 = document.querySelector(".feed1_1")
let feedback1_2 = document.querySelector(".feed1_2")
let feedback1_3 = document.querySelector(".feed1_3")
let feedback1_4 = document.querySelector(".feed1_4")

let feedback2_1 = document.querySelector(".feed2_1")
let feedback2_2 = document.querySelector(".feed2_2")
let feedback2_3 = document.querySelector(".feed2_3")
let feedback2_4 = document.querySelector(".feed2_4")

let feedback3_1 = document.querySelector(".feed3_1")
let feedback3_2 = document.querySelector(".feed3_2")
let feedback3_3 = document.querySelector(".feed3_3")
let feedback3_4 = document.querySelector(".feed3_4")

let feedback4_1 = document.querySelector(".feed4_1")
let feedback4_2 = document.querySelector(".feed4_2")
let feedback4_3 = document.querySelector(".feed4_3")
let feedback4_4 = document.querySelector(".feed4_4")

let feedback5_1 = document.querySelector(".feed5_1")
let feedback5_2 = document.querySelector(".feed5_2")
let feedback5_3 = document.querySelector(".feed5_3")
let feedback5_4 = document.querySelector(".feed5_4")

let feedback6_1 = document.querySelector(".feed6_1")
let feedback6_2 = document.querySelector(".feed6_2")
let feedback6_3 = document.querySelector(".feed6_3")
let feedback6_4 = document.querySelector(".feed6_4")

let feedback7_1 = document.querySelector(".feed7_1")
let feedback7_2 = document.querySelector(".feed7_2")
let feedback7_3 = document.querySelector(".feed7_3")
let feedback7_4 = document.querySelector(".feed7_4")

let feedback8_1 = document.querySelector(".feed8_1")
let feedback8_2 = document.querySelector(".feed8_2")
let feedback8_3 = document.querySelector(".feed8_3")
let feedback8_4 = document.querySelector(".feed8_4")

let feedback9_1 = document.querySelector(".feed9_1")
let feedback9_2 = document.querySelector(".feed9_2")
let feedback9_3 = document.querySelector(".feed9_3")
let feedback9_4 = document.querySelector(".feed9_4")


/* Feedback text declaration */

const backButton = document.querySelector(".back")
const nextButton = document.querySelector(".next")
let moduleCounter = document.querySelector(".moduleCounter")
backButton.disabled = true
nextButton.disabled = true





function reset() {

  let invoer1 = document.querySelector("#Invoer1")
  let invoer2 = document.querySelector("#Invoer2")
  let invoer3 = document.querySelector("#Invoer3")
  let invoer4 = document.querySelector("#Invoer4")



  /* ///////////////////////////Color for text ///////////////////////////*/
  if (invoer1.textContent == Geheimnummer1) {
    invoer1.classList.add("green")
  } else if (invoer1.textContent == Geheimnummer2 || invoer1.textContent == Geheimnummer3 || invoer1.textContent == Geheimnummer4) {
    invoer1.classList.add("orange")
  } else {
    invoer1.classList.add("red")
  }

  if (invoer2.textContent == Geheimnummer2) {
    invoer2.classList.add("green")
  } else if (invoer2.textContent == Geheimnummer1 || invoer2.textContent == Geheimnummer3 || invoer2.textContent == Geheimnummer4) {
    invoer2.classList.add("orange")
  } else {
    invoer2.classList.add("red")
  }

  if (invoer3.textContent == Geheimnummer3) {
    invoer3.classList.add("green")
  } else if (invoer3.textContent == Geheimnummer1 || invoer3.textContent == Geheimnummer2 || invoer3.textContent == Geheimnummer4) {
    invoer3.classList.add("orange")
  } else {
    invoer3.classList.add("red")
  }

  if (invoer4.textContent == Geheimnummer4) {
    invoer4.classList.add("green")
  } else if (invoer4.textContent == Geheimnummer1 || invoer4.textContent == Geheimnummer2 || invoer4.textContent == Geheimnummer3) {
    invoer4.classList.add("orange")
  } else {
    invoer4.classList.add("red")
  }
  /* ///////////////////////////Color for text ///////////////////////////*/




  /* ////////////////////////////////////Feedbacklog////////////////////////////// */
    /* /////////////////////////// */
  /* Cloning of invoer */
  /* /////////////////////////// */
  let invoer1Clone = invoer1.cloneNode(true)
  let invoer2Clone = invoer2.cloneNode(true)
  let invoer3Clone = invoer3.cloneNode(true)
  let invoer4Clone = invoer4.cloneNode(true)


  document.body.appendChild(invoer1Clone)
  document.body.appendChild(invoer2Clone)
  document.body.appendChild(invoer3Clone)
  document.body.appendChild(invoer4Clone)

  let ingeving = invoer1.textContent + invoer2.textContent + invoer3.textContent + invoer4.textContent
  console.log("Ingevoerde code: " + ingeving)
  /* /////////////////////////// */
  /* Cloning of invoer */
  /* /////////////////////////// */

  /* /////////////////////////// */
  /* Attempt counter en oplossing */
  /* ////////////////////////// */

  if (ingeving == oplossing) {
    nextButton.classList.remove("disabledButton")
    nextButton.disabled = false
    invoer1Clone.classList.add("obstructModule")
    invoer2Clone.classList.add("obstructModule")
    invoer3Clone.classList.add("obstructModule")
    invoer4Clone.classList.add("obstructModule")

  } else {
    AttemptsLeft = AttemptsLeft - 1
        let pogingText = document.querySelector(".AttemptAantal")
        pogingText.textContent = AttemptsLeft
        console.log(AttemptsLeft + " Attempts left")
  }
  /* /////////////////////////// */
  /* Attempt counter en oplossing */
  /* ////////////////////////// */





  /* ////////////////////////// */
  /* feedbackinvoer */
  /* ////////////////////////// */
  if (AttemptsLeft == 9) {
    feedback1_1.replaceWith(invoer1Clone)
    feedback1_2.replaceWith(invoer2Clone)
    feedback1_3.replaceWith(invoer3Clone)
    feedback1_4.replaceWith(invoer4Clone)
  } else if (AttemptsLeft == 8) {
    feedback2_1.replaceWith(invoer1Clone)
    feedback2_2.replaceWith(invoer2Clone)
    feedback2_3.replaceWith(invoer3Clone)
    feedback2_4.replaceWith(invoer4Clone)
  } else if (AttemptsLeft == 7) {
    feedback3_1.replaceWith(invoer1Clone)
    feedback3_2.replaceWith(invoer2Clone)
    feedback3_3.replaceWith(invoer3Clone)
    feedback3_4.replaceWith(invoer4Clone)
  } else if (AttemptsLeft == 6) {
    feedback4_1.replaceWith(invoer1Clone)
    feedback4_2.replaceWith(invoer2Clone)
    feedback4_3.replaceWith(invoer3Clone)
    feedback4_4.replaceWith(invoer4Clone)
  } else if (AttemptsLeft == 5) {
    feedback5_1.replaceWith(invoer1Clone)
    feedback5_2.replaceWith(invoer2Clone)
    feedback5_3.replaceWith(invoer3Clone)
    feedback5_4.replaceWith(invoer4Clone)
  } else if (AttemptsLeft == 4) {
    feedback6_1.replaceWith(invoer1Clone)
    feedback6_2.replaceWith(invoer2Clone)
    feedback6_3.replaceWith(invoer3Clone)
    feedback6_4.replaceWith(invoer4Clone)
  } else if (AttemptsLeft == 3) {
    feedback7_1.replaceWith(invoer1Clone)
    feedback7_2.replaceWith(invoer2Clone)
    feedback7_3.replaceWith(invoer3Clone)
    feedback7_4.replaceWith(invoer4Clone)
  } else if (AttemptsLeft == 2) {
    feedback8_1.replaceWith(invoer1Clone)
    feedback8_2.replaceWith(invoer2Clone)
    feedback8_3.replaceWith(invoer3Clone)
    feedback8_4.replaceWith(invoer4Clone)
  } else if (AttemptsLeft == 1) {
    feedback9_1.replaceWith(invoer1Clone)
    feedback9_2.replaceWith(invoer2Clone)
    feedback9_3.replaceWith(invoer3Clone)
    feedback9_4.replaceWith(invoer4Clone)
  } else if (AttemptsLeft == 0) {
    console.log("bloe")
  }
  /* ////////////////////////// */
  /* feedbackinvoer */
  /* ////////////////////////// */

  /* ////////////////////////////////////Feedbacklog////////////////////////////// */
}

/* ////////////////////Module switch//////////////////// */
function nextModule() {
  if (moduleCounter.textContent === "2/3") {
    module2.classList.add("obstructModule")
    module3.classList.remove("obstructModule")
    nextButton.classList.add("disabledButton")
    nextButton.disabled = true
    moduleCounter.textContent = "3/3"
    console.log("Moved to the next module (2/3 to 3/3)")
  }
  else if (moduleCounter.textContent === "1/3") {
    module1.classList.add("obstructModule")
    module2.classList.remove("obstructModule")
    console.log(moduleCounter)
    if (wireCountDown === 0) {
      nextButton.classList.remove("disabledButton")
      nextButton.disabled = false
    } else {
      nextButton.classList.add("disabledButton")
      nextButton.disabled = true
    }
    backButton.classList.remove("disabledButton")
    backButton.disabled = false
    moduleCounter.textContent = "2/3"
    console.log(moduleCounter)
  }
}


function previousModule() {
  if (moduleCounter.textContent == "2/3") {
    module2.classList.add("obstructModule")
    module1.classList.remove("obstructModule")
    backButton.classList.add("disabledButton")
    backButton.disabled = true
    nextButton.classList.remove("disabledButton")
    nextButton.disabled = false
    console.log(nextButton)
    moduleCounter.textContent = "1/3"

  } else if (moduleCounter.textContent == "3/3") {
    module3.classList.add("obstructModule")
    module2.classList.remove("obstructModule")
    moduleCounter.textContent = "2/3"
    nextButton.classList.remove("disabledButton")
    nextButton.disabled = false
  }

}


nextButton.addEventListener("click", nextModule)
backButton.addEventListener("click", previousModule)

/* ////////////////////Module switch//////////////////// */



/* /////////////////////////// Clear invoer button /////////////////////////// */
const clearinvoer = document.querySelector(".clear")
function clearInvoer() {
  invoer1.textContent = "."
  invoer2.textContent = "."
  invoer3.textContent = "."
  invoer4.textContent = "."

  invoer1.classList.remove("green", "orange", "red")
  invoer2.classList.remove("green", "orange", "red")
  invoer3.classList.remove("green", "orange", "red")
  invoer4.classList.remove("green", "orange", "red")

}
clearinvoer.addEventListener("click", clearInvoer)
/* /////////////////////////// Clear invoer button /////////////////////////// *
/* boomboomscherm requirements */
let bodyElement = document.querySelector("body")

console.log(AttemptsLeft + " Attempts left")
submit.addEventListener("click", reset)
numPad1.addEventListener("click", nummerinvoer1)
numPad2.addEventListener("click", nummerinvoer2)
numPad3.addEventListener("click", nummerinvoer3)
numPad4.addEventListener("click", nummerinvoer4)
numPad5.addEventListener("click", nummerinvoer5)
numPad6.addEventListener("click", nummerinvoer6)
numPad7.addEventListener("click", nummerinvoer7)
numPad8.addEventListener("click", nummerinvoer8)
numPad9.addEventListener("click", nummerinvoer9)
numPad0.addEventListener("click", nummerinvoer0)

/* //////////////////////////////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////// Module 1 //////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////////////////////////////// */

/* //////////////////////////////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////// Module 2 //////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////////////////////////////// */


let slot1 = document.querySelector(".slot1")
let slot2 = document.querySelector(".slot2")
let slot3 = document.querySelector(".slot3")
let slot4 = document.querySelector(".slot4")


let wireNummerA = Math.ceil(Math.random() * 4)
let wireNummerB = Math.ceil(Math.random() * 4)
let wireNummerC = Math.ceil(Math.random() * 4)
let wireNummerD = Math.ceil(Math.random() * 4)

let slot1img = document.createElement("img")
slot1img.className = "slot1img"
let slot2img = document.createElement("img")
slot2img.className = "slot2img"
let slot3img = document.createElement("img")
slot3img.className = "slot3img"
let slot4img = document.createElement("img")
slot4img.className = "slot4img"


function generateRandomNumber() {
  const wireNummers = [1, 2, 3, 4];

  const volgOrdewireNummers = wireNummers.sort(() => Math.random() - 0.5);

  wireNummerA = volgOrdewireNummers.slice(0, 1)
  wireNummerB = volgOrdewireNummers.slice(1, 2)
  wireNummerC = volgOrdewireNummers.slice(2, 3)
  wireNummerD = volgOrdewireNummers.slice(3, 4) /* met .slice pak je een onderdeel van het array. dus bij deze de array waarde tussen 3 en 4 */


  /* 
  
  Als zwart op slot 1 zit, knip je die eerst door
  Als blauw op slot 2 zit knip je die eerst door
  Als rood op slot 3 zit knip je deze
  Als groen op slot 4 zit knip je die
  
  Als groen op slot 1 is dan knip je deze als tweede
  Als rood op slot 2 zit dan knip je deze als tweede
  Als zwart op slot 3 zit knip je deze als tweede
  Als blauw op slot 4, knip deze als tweede
  
  Als rood op slot 1 is knip je deze als eennalaatste
  Als groen op slot 2 zit knip je die als eennalaatste
  Als blauw op slot 3 zit knip je deze als derde
  Als zwart slot 4 is, knip als derde
  
  Als blauw op slot 1 zit knip als laatste
  Als zwart op slot 2 zit knip als laatst deze
  als groen op slot 3 zit, als laatste knippen
  als rood op slot 4 is, knip deze ook als laatste
  */

  if (wireNummerA == 1) {
    slot1.textContent = "A"
    slot1img.src = "images/zwartdraad.png"
    slot1.appendChild(slot1img)
  } else if (wireNummerA == 2) {
    slot2.textContent = "A"
    slot2img.src = "images/blauwdraad.png"
    slot2.appendChild(slot2img)
  } else if (wireNummerA == 3) {
    slot3.textContent = "A"
    slot3img.src = "images/rooddraad.png"
    slot3.appendChild(slot3img)
  } else if (wireNummerA == 4) {
    slot4.textContent = "A"
    slot4img.src = "images/groendraad.png"
    slot4.appendChild(slot4img)
  }
  if (wireNummerB == 1) {
    slot1.textContent = "B"
    slot1img.src = "images/groendraad.png"
    slot1.appendChild(slot1img)
  } else if (wireNummerB == 2) {
    slot2.textContent = "B"
    slot2img.src = "images/rooddraad.png"
    slot2.appendChild(slot2img)
  } else if (wireNummerB == 3) {
    slot3.textContent = "B"
    slot3img.src = "images/zwartdraad.png"
    slot3.appendChild(slot3img)
  } else if (wireNummerB == 4) {
    slot4.textContent = "B"
    slot4img.src = "images/blauwdraad.png"
    slot4.appendChild(slot4img)


  }

  if (wireNummerC == 1) {
    slot1.textContent = "C"
    slot1img.src = "images/rooddraad.png"
    slot1.appendChild(slot1img)
  } else if (wireNummerC == 2) {
    slot2.textContent = "C"
    slot2img.src = "images/groendraad.png"
    slot2.appendChild(slot2img)
  } else if (wireNummerC == 3) {
    slot3.textContent = "C"
    slot3img.src = "images/blauwdraad.png"
    slot3.appendChild(slot3img)
  } else if (wireNummerC == 4) {
    slot4.textContent = "C"
    slot4img.src = "images/zwartdraad.png"
    slot4.appendChild(slot4img)
  }
  if (wireNummerD == 1) {
    slot1.textContent = "D"
    slot1img.src = "images/blauwdraad.png"
    slot1.appendChild(slot1img)
  } else if (wireNummerD == 2) {
    slot2.textContent = "D"
    slot2img.src = "images/zwartdraad.png"
    slot2.appendChild(slot2img)
  } else if (wireNummerD == 3) {
    slot3.textContent = "D"
    slot3img.src = "images/groendraad.png"
    slot3.appendChild(slot3img)
  } else if (wireNummerD == 4) {
    slot4.textContent = "D"
    slot4img.src = "images/rooddraad.png"
    slot4.appendChild(slot4img)
  }

}
generateRandomNumber()





/* /////////////////////////////////// Wire Check////////////////////////////////// */

let wireCountDown = 4
function slot1wiresCheck() {
  if (slot1.textContent == "A") {

    wireCountDown = wireCountDown - 1
    slot1img.src = "images/zwartdraad_knip.png"
    completeWiresCheck()
  } else if (slot1.textContent == "B" && wireCountDown == 3) {

    wireCountDown = wireCountDown - 1
    slot1img.src = "images/groendraad_knip.png"
    completeWiresCheck()
  } else if (slot1.textContent == "C" && wireCountDown == 2) {

    wireCountDown = wireCountDown - 1
    slot1img.src = "images/rooddraad_knip.png"
    completeWiresCheck()
  }
  else if (slot1.textContent == "D" && wireCountDown == 1) {

    wireCountDown = wireCountDown - 1
    slot1img.src = "images/blauwdraad_knip.png"
    completeWiresCheck()
  }
  else {
    AttemptsLeft = 0
  }
}

function slot2wiresCheck() {
  if (slot2.textContent == "A") {

    wireCountDown = wireCountDown - 1
    slot2img.src = "images/blauwdraad_knip.png"
    completeWiresCheck()
  } else if (slot2.textContent == "B" && wireCountDown == 3) {

    wireCountDown = wireCountDown - 1
    slot2img.src = "images/rooddraad_knip.png"
    completeWiresCheck()
  } else if (slot2.textContent == "C" && wireCountDown == 2) {

    wireCountDown = wireCountDown - 1
    slot2img.src = "images/groendraad_knip.png"
    completeWiresCheck()
  }
  else if (slot2.textContent == "D" && wireCountDown == 1) {

    wireCountDown = wireCountDown - 1
    slot2img.src = "images/zwartdraad_knip.png"
    completeWiresCheck()
  }
  else {
    AttemptsLeft = 0

  }
}


function slot3wiresCheck() {
  if (slot3.textContent == "A") {

    wireCountDown = wireCountDown - 1
    slot3img.src = "images/rooddraad_knip.png"
    completeWiresCheck()
  } else if (slot3.textContent == "B" && wireCountDown == 3) {

    wireCountDown = wireCountDown - 1
    slot3img.src = "images/zwartdraad_knip.png"
    completeWiresCheck()
  } else if (slot3.textContent == "C" && wireCountDown == 2) {

    wireCountDown = wireCountDown - 1
    slot3img.src = "images/blauwdraad_knip.png"
    completeWiresCheck()
  }
  else if (slot3.textContent == "D" && wireCountDown == 1) {

    wireCountDown = wireCountDown - 1
    slot3img.src = "images/groendraad_knip.png"
    completeWiresCheck()
  }
  else {
    AttemptsLeft = 0

  }

}

function slot4wiresCheck() {
  if (slot4.textContent == "A") {

    wireCountDown = wireCountDown - 1
    slot4img.src = "images/groendraad_knip.png"
    completeWiresCheck()
  } else if (slot4.textContent == "B" && wireCountDown == 3) {

    wireCountDown = wireCountDown - 1
    slot4img.src = "images/blauwdraad_knip.png"
    completeWiresCheck()
  } else if (slot4.textContent == "C" && wireCountDown == 2) {

    wireCountDown = wireCountDown - 1
    slot4img.src = "images/zwartdraad_knip.png"
    completeWiresCheck()
  }
  else if (slot4.textContent == "D" && wireCountDown == 1) {

    wireCountDown = wireCountDown - 1
    slot4img.src = "images/rooddraad_knip.png"
    completeWiresCheck()
  }
  else {
    AttemptsLeft = 0

  }

}
function wirecutSound() {
  let wireCutSound = new Audio("audio/wirecut.mp3")
  wireCutSound.play()
}


function completeWiresCheck() {
  if (wireCountDown == 0) {
    console.log("Je hebt de draden opgelost!")
    /*     module3.classList.remove("obstructModule")
        module2.classList.add("obstructModule") */
    const nextButton = document.querySelector(".next")
    nextButton.classList.remove("disabledButton")
    nextButton.disabled = false
  }
}

slot1.addEventListener("click", slot1wiresCheck)
slot2.addEventListener("click", slot2wiresCheck)
slot3.addEventListener("click", slot3wiresCheck)
slot4.addEventListener("click", slot4wiresCheck)

slot1.addEventListener("mousedown", wirecutSound)
slot2.addEventListener("mousedown", wirecutSound)
slot3.addEventListener("mousedown", wirecutSound)
slot4.addEventListener("mousedown", wirecutSound)


/* /////////////////////////////////// Wire Check////////////////////////////////// */


/* //////////////////////////////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////// Module 2 //////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////////////////////////////// */


/* //////////////////////////////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////// Module 3 //////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////////////////////////////// */
let detonator = document.querySelector(".detonateButton")
let detonatorText = document.querySelector(".detonatorText")
let stroke = document.querySelector(".stroke")
let bombNumber = 0
let releaseTimeNumber = 0
let isSpacebarDown = false

if (wireNummerA == 1) {
  detonator.classList.add("achtergrondRood")
  bombNumber = bombNumber + 0
} else if (wireNummerA == 2) {
  detonator.classList.add("achtergrondBlauw")
  bombNumber = bombNumber + 1
} else if (wireNummerA == 3) {
  detonator.classList.add("achtergrondWit")
  bombNumber = bombNumber - 1
} else if (wireNummerA == 4) {
  detonator.classList.add("achtergrondZwart")
  bombNumber = bombNumber + 2
}


if (wireNummerC == 1) {
  detonatorText.textContent = "press"
  bombNumber = bombNumber - 1
} else if (wireNummerC == 2) {
  detonatorText.textContent = "hold"
  bombNumber = bombNumber + 2
} else if (wireNummerC == 3) {
  detonatorText.textContent = "detonate"
  bombNumber = bombNumber + 0
} else if (wireNummerC == 4) {
  detonatorText.textContent = "don't"
  bombNumber = bombNumber + 1
}


function SpacebarDown(event) {
  console.log("spacebardown")
  if (event.keyCode == 32 && !isSpacebarDown){
    isSpacebarDown = true
  if (wireNummerB == 1) {
    stroke.classList.add("achtergrondRood")
    bombNumber = bombNumber + 2
    console.log(bombNumber)
  } else if (wireNummerB == 2) {     
    stroke.classList.add("achtergrondBlauw")
    bombNumber = bombNumber + 0
    console.log(bombNumber)
  } else if (wireNummerB == 3) {
    stroke.classList.add("achtergrondWit")
    bombNumber = bombNumber + 1
    console.log(bombNumber)
  } else if (wireNummerB == 4) {
    stroke.classList.add("achtergrondZwart")
    bombNumber = bombNumber - 1
    console.log(bombNumber)
  }
  console.log(bombNumber + " is bombNumber")

}
if (bombNumber < 0) {
  releaseTimeNumber = 1
} else if (bombNumber == 2 || bombNumber == 4) {
  releaseTimeNumber = 5
} else if (bombNumber == 1 || bombNumber == 6) {
  releaseTimeNumber = 2
} else if (bombNumber == 0 || bombNumber == 3) {
  releaseTimeNumber = 9
} else if (bombNumber == 5) {
  releaseTimeNumber = 7
}

console.log(releaseTimeNumber + " dit is release number")

}


let pressCheck = false




function timeCheck() {
  let minutes1 = Math.floor(timeLeft / 60)
  const seconds1 = timeLeft % 60
  let secondsTientallen = Math.floor(seconds1 / 10)
  let secondsEnkeltallen = seconds1

  if (seconds1 >= 50) {
    secondsEnkeltallen = seconds1 - 50

  } else if (seconds1 >= 40 && seconds1 < 50) {
    secondsEnkeltallen = seconds1 - 40

  } else if (seconds1 >= 30 && seconds1 < 40) {
    secondsEnkeltallen = seconds1 - 30

  } else if (seconds1 >= 20 && seconds1 < 30) {
    secondsEnkeltallen = seconds1 - 20

  } else if (seconds1 >= 10 && seconds1 < 20) {
    secondsEnkeltallen = seconds1 - 10

  } else if (seconds1 < 10) {
    secondsEnkeltallen = seconds1

  }
  /*   console.log("min = " + minutes1)
    console.log("seconde = " + secondsEnkeltallen)
    console.log("tientallen = " + secondsTientallen)
   */
    let isSpacebarDown = false
    function SpacebarPress(event) {
      if (event.keyCode == 32 && !isSpacebarDown) {
        console.log("spacebar press")
        pressCheck = true
        spacebarRelease(minutes1, secondsEnkeltallen, secondsTientallen)

      }
    }
    document.addEventListener("keyup", SpacebarPress)
/*   spacebarRelease(minutes1, secondsEnkeltallen, secondsTientallen) */

}
timeCheck()


/* OM DIT TE FIXEN GEBRUIK && STATEMENT */
function spacebarRelease(minutes1, secondsEnkeltallen, secondsTientallen) {
  if ((releaseTimeNumber === minutes1 || releaseTimeNumber === secondsEnkeltallen || releaseTimeNumber === secondsTientallen) && pressCheck === true) {
    console.log("Je hebt de bomb ontmantelt!")
    bodyElement.classList.add("achtergrondGroen")

  } else if (releaseTimeNumber !== minutes1 && releaseTimeNumber !== secondsEnkeltallen && releaseTimeNumber !== secondsTientallen && pressCheck === true) /* (releaseTimeNumber === minutes1 || releaseTimeNumber === secondsEnkeltallen || releaseTimeNumber === secondsTientallen) */ {
    /* AttemptsLeft = 0 */

    console.log("Doeidoei")
  }
}



document.addEventListener("keydown", SpacebarDown)





detonator.addEventListener("mousedown", SpacebarDown)
startKnop.addEventListener("click", timeCheck)


/* //////////////////////////////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////// Module 3 //////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////////////////////////////// */

/* Cheat menu */
const h2 = document.querySelector("h2")
function cheat() {
  module2.classList.remove("obstructModule")
  module1.classList.remove("obstructModule")
  module3.classList.remove("obstructModule")

}

h2.addEventListener("click", cheat)
/* Cheat menu */

