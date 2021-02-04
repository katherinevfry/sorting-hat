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

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buttonEvents = () => {
  document.querySelector("#formOpenButton").addEventListener("click", showForm);

  document.querySelector("#firstYears").addEventListener("click", expelStudent);
};

const showForm = () => {
  let form = `<form class="form">
  <div>
    <label for="studentName">Student Name:</label>
    <input type="text" class="form-control" id="studentNameInput" placeholder="Nevil Longbottom" required="true">
  </div>
  <button type="submit" class="btn btn-primary" id="sortButton">Sort!</button>
</form>`;
  printToDom("#formDiv", form);
  document.querySelector("#sortButton").addEventListener("click", grabFormInfo);
};

const dangerMessage = () => {
  let message = `<h6 class="text-danger">Please type a name</h6>`;
  printToDom("#dangerZone", message);
};

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

const sortingHat = () => {
  const hogwartsHouses = ["Slytherin", "Ravenclaw", "Hufflepuff", "Gryffindor"];
  let houseAssignment =
    hogwartsHouses[Math.floor(Math.random() * hogwartsHouses.length)];
  return houseAssignment;
};

const grabFormInfo = (e) => {
  e.preventDefault();

  const name = document.querySelector("#studentNameInput").value;
  const house = sortingHat();
  const crest = "";

  const studentIds = students
    .map((student) => student.id)
    .sort((a, b) => a - b);

  const id = studentIds.length ? studentIds[studentIds.length - 1] + 1 : 1;

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

    let sortedStudents = students.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    cardBuilder(sortedStudents);

    document.querySelector("form").reset();
  }
};

const expelStudent = (e) => {
  const targetType = e.target.type;
  const targetId = Number(e.target.id);

  if (targetType === "button") {
    const studentIndex = students.findIndex(
      (student) => student.id === targetId
    );
    let expelled = students.splice(studentIndex, 1);
    voldysArmy.push(...expelled);
  }
  cardBuilder(students);
  voldermortsArmy(voldysArmy);
  console.log(voldysArmy);
};

const voldermortsArmy = (arr) => {
  let expelled = "";
  for (let [i, element] of arr.entries()) {
    expelled += `<div class="card expelled" style="width: 18rem; id=${element.id}">
      <p class="card-text" id="student"> Oh no! ${element.name} has joined Voldermort's Army!</p>
  </div>`;
  }
  printToDom("#voldysArmy", expelled);
};

const init = () => {
  buttonEvents();
};

init();
