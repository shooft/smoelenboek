let base = "https://fdnd.directus.app/items"


let buttonAlles = document.querySelector("menu li:nth-of-type(1) button")
let buttonComplete = document.querySelector("menu li:nth-of-type(2) button")
let buttonDummy = document.querySelector("menu li:nth-of-type(3) button")
let buttonCombi = document.querySelector("menu li:nth-of-type(4) button")
let buttonHulp = document.querySelector("menu li:nth-of-type(5) button")

buttonAlles.addEventListener("click", getKlas)
buttonComplete.addEventListener("click", getComplete)
buttonDummy.addEventListener("click", getDummy)
buttonCombi.addEventListener("click", getCombi)
buttonHulp.addEventListener("click", getHulp)





// GET KLAS

async function getKlas() {
  let endpoint = "/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526"
  let url = base + endpoint

  let response = await fetch(url)
  let responseJSON = await response.json()
  let responseData = responseJSON.data

  // zoek de huidige lijst op en gooi die weg

  let huidigeDocument = document.querySelector("ul")
  if (huidigeDocument) {
    huidigeDocument.remove()
  }
  

  // maak nieuwe lijst en voeg die toe
  let students = document.createElement("ul")

  responseData.forEach( student => {
    let studentHTML = 
    `<li>
        <h2><span>${student.fav_emoji}</span> ${student.name}</h2>
        <img src="${student.avatar}" alt="${student.name}">
        <label><input type="checkbox">laat de naam zien</label>
    </li>`

    students.insertAdjacentHTML("beforeend", studentHTML)
  } )

  document.body.appendChild(students)
}





// GET COMPLETE

async function getComplete() {
  let endpoint = "/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526&filter[avatar][_nempty]&filter[fav_emoji][_nempty]"
  let url = base + endpoint

  let response = await fetch(url)
  let responseJSON = await response.json()
  let responseData = responseJSON.data

  // zoek de huidige lijst op en gooi die weg

  let huidigeDocument = document.querySelector("ul")
  if (huidigeDocument) {
    huidigeDocument.remove()
  }
  

  // maak nieuwe lijst en voeg die toe
  let students = document.createElement("ul")

  responseData.forEach( student => {
    let studentHTML = 
    `<li>
        <h2><span>${student.fav_emoji}</span> ${student.name}</h2>
        <img src="${student.avatar}" alt="${student.name}">
        <label><input type="checkbox">laat de naam zien</label>
    </li>`

    students.insertAdjacentHTML("beforeend", studentHTML)
  } )

  document.body.appendChild(students)
}





// GET DUMMY

async function getDummy() {
  let endpoint = "/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526"
  let url = base + endpoint

  let response = await fetch(url)
  let responseJSON = await response.json()
  let responseData = responseJSON.data

  // zoek de huidige lijst op en gooi die weg

  let huidigeDocument = document.querySelector("ul")
  if (huidigeDocument) {
    huidigeDocument.remove()
  }
  

  // maak nieuwe lijst en voeg die toe
  let students = document.createElement("ul")

  

  responseData.forEach( student => {
    // let spookNr = Math.floor( Math.random * 8 ) + 1
    let spookNr = Math.floor( Math.random() * 8 ) + 1

    console.log(spookNr);

    let studentHTML = 
    `<li>
        <h2><span>${ student.fav_emoji ? student.fav_emoji : '👻'}</span> ${student.name}</h2>
        <img src="${ student.avatar ? student.avatar : 'images/spook'+spookNr+'.png' }" alt="${student.name}" onerror="this.src='images/404.png'">
        <label><input type="checkbox">laat de naam zien</label>
    </li>`

    students.insertAdjacentHTML("beforeend", studentHTML)
  } )

  document.body.appendChild(students)
}





// GET COMBI

async function getCombi() {
  let endpoint = "/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526"
  let url = base + endpoint

  let response = await fetch(url)
  let responseJSON = await response.json()
  let responseData = responseJSON.data

  // zoek de huidige lijst op en gooi die weg

  let huidigeDocument = document.querySelector("ul")
  if (huidigeDocument) {
    huidigeDocument.remove()
  }
  

  // maak nieuwe lijst en voeg die toe
  let students = document.createElement("ul")

  

  responseData.forEach( student => {
    // let spookNr = Math.floor( Math.random * 8 ) + 1
    let spookNr = Math.floor( Math.random() * 8 ) + 1

    console.log(spookNr);

    let studentHTML = 
    `<li>
        <h2><span>${ student.fav_emoji ? student.fav_emoji : ''}</span> ${student.name}</h2>
        <img src="${ student.avatar ? student.avatar : 'images/spook'+spookNr+'.png' }" alt="${student.name}" onerror="this.src='images/404.png'">
        <label><input type="checkbox">laat de naam zien</label>
    </li>`

    students.insertAdjacentHTML("beforeend", studentHTML)
  } )

  document.body.appendChild(students)
}





// GET COMBI

async function getHulp() {
  let endpoint = "/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526"
  let url = base + endpoint

  let response = await fetch(url)
  let responseJSON = await response.json()
  let responseData = responseJSON.data

  // zoek de huidige lijst op en gooi die weg

  let huidigeDocument = document.querySelector("ul")
  if (huidigeDocument) {
    huidigeDocument.remove()
  }
  

  // maak nieuwe lijst en voeg die toe
  let students = document.createElement("ul")

  

  responseData.forEach( student => {
    // with link

    let linkHTML = 
      `<li>
          <h2><span>${ student.fav_emoji ? student.fav_emoji : ''}</span> ${student.name}</h2>
          <p>fix het plaatje in <a href="https://whois.fdnd.nl/admin" target="_blank">de API admin</a> (ID ${student.id})</p>
          <label><input type="checkbox">laat de naam zien</label>
      </li>`

    // with img
    let imgHTML = 
      `<li>
          <h2><span>${ student.fav_emoji ? student.fav_emoji : ''}</span> ${student.name}</h2>
          <img src="${student.avatar}" alt="${student.name}"></img>
          <label><input type="checkbox">laat de naam zien</label>
      </li>`

    
    if (student.avatar) {
      students.insertAdjacentHTML("beforeend", imgHTML)
      
      // add error event listener to img
      let theIMg = students.querySelector("li:last-of-type img");
      theIMg.addEventListener('error', event => {
        let theImg = event.target
        let theLi = theImg.closest("li")

        theLi.outerHTML = linkHTML
      })
    } else {
       students.insertAdjacentHTML("beforeend", linkHTML)
    }

  } )
  
  document.body.appendChild(students)
}