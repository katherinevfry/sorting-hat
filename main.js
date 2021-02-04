//Data Structures
const students = [];
const voldysArmy = [];
const Gryffindor =
  "https://mmv2api.s3.us-east-2.amazonaws.com/products/images/2-image-111773-1-productimagenowatermark.jpg";
const Hufflepuff =
  "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/original/products/88364/91134/Harry-Potter-Hufflepuff-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__21122.1507644096.jpg?c=2";
const Slytherin =
  "https://i.pinimg.com/originals/d1/37/31/d137310caea589e8f550404f41ca57e2.jpg";
const Ravenclaw =
  "https://www.yourwdwstore.net/assets/images/3/30000/2000/000/32099.jpg";

  //Print to DOM function
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};
//Add event listeners to buttons
const buttonEvents = () => {
  document.querySelector("#formOpenButton").addEventListener("click", showForm);

  document.querySelector("#firstYears").addEventListener("click", expelStudent);
};

//show form on button click function
const showForm = () => {
  let form = `<form class="form">
  <div>
    <label for="studentName">Student Name:</label>
    <input type="text" class="form-control" id="studentNameInput" placeholder="Nevil Longbottom" required="true">
  </div>
  <button type="submit" class="btn btn-primary" id="sortButton">Sort!</button>
</form>`;
  printToDom("#formDiv", form);
  document.querySelector("#sortButton").addEventListener("click", domEvents);
};

// message to print to DOM if empty name entry field
const dangerMessage = () => {
  let message = `<h6 class="text-danger">Please type a name</h6>`;
  printToDom("#dangerZone", message);
};

// Function to build a student card
const cardBuilder = (arr) => {
  let domString = "";
  for (let [i, element] of arr.entries()) {
    domString += `<div class="card ${element.house}" style="width: 18rem; id=${i}">
    <img src="${element.crest}" class="card-img-top cardImg" alt="${element.house} crest">
    <div class="card-body">
      <h5 class="card-title" id="student">${element.name}</h5>
      <p class="card-text" id="house">${element.house}</p>
      <a href="#" type="button" class="btn btn-danger" id="${element.id}">Expel</a>
    </div>
  </div>`;
  }
  printToDom("#firstYears", domString);
};

// Sorts students into random house
const sortingHat = () => {
  const hogwartsHouses = ["Slytherin", "Ravenclaw", "Hufflepuff", "Gryffindor"];
  let houseAssignment =
    hogwartsHouses[Math.floor(Math.random() * hogwartsHouses.length)];
  return houseAssignment;
};

//Arranges hogwarts students alphabetically on DOM
const sortStudents = () => {
  let sortedStudents = students.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  return sortedStudents
}

//Populate student array with student info
const domEvents = (e) => {
  e.preventDefault();

  const name = document.querySelector("#studentNameInput").value;
  const house = sortingHat();
  const crest = "";

  const studentNumber = students
    .map((student) => student.id)
    .sort((a, b) => a - b);

  if (studentNumber.length) {
   id = studentNumber[studentNumber.length - 1] + 1
  } else {
    id = 1;
  }

  const obj = {
    name,
    house,
    id,
    crest,
  };

  
  if (house === "Gryffindor") {
    obj.crest = Gryffindor;
  } else if (house === "Slytherin") {
    obj.crest = Slytherin;
  } else if (house === "Hufflepuff") {
    obj.crest = Hufflepuff;
  } else if (house === "Ravenclaw") {
    obj.crest = Ravenclaw;
  }

  if (name.length === 0) {
    dangerMessage();
  } else {
    students.push(obj);
    cardBuilder(sortStudents());
    document.querySelector("form").reset();
  }
};

//delete functionality
const expelStudent = (e) => {
  const isThisButton = e.target.type;
  const studentToExpel = Number(e.target.id);

  if (isThisButton === "button") {
    const deleteStudentHere = students.findIndex(
      (student) => student.id === studentToExpel
    );
    let deathEaters = students.splice(deleteStudentHere, 1);
    voldysArmy.push(...deathEaters);
  }
  cardBuilder(students);
  voldermortsArmy(voldysArmy);

};

// creates card for expelled students
const voldermortsArmy = (arr) => {
  let deathEaters = "";
  for (let [i, element] of arr.entries()) {
    deathEaters += `<div class="card expelled" style="width: 18rem; id=${element.id}">
      <p class="card-text" id="student"> Oh no! <b>${element.name}</b> has joined Voldermort's Army!</p>
  </div>`;
  }
  printToDom("#voldysArmy", deathEaters);
};

//initialize events function
const init = () => {
  buttonEvents();
};

//make it all happen!
init();
