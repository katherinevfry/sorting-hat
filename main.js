const students = [];

//print to dom

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

//button event handler

const buttonEvents = () => {
  document.querySelector("#formOpenButton").addEventListener("click", showForm);

  document.querySelector("#firstYears").addEventListener("click", expelStudent);
};

//function to show form on button click

const showForm = () => {
  let form = `<form class="form">
  <div>
    <label for="studentName">Student Name:</label>
    <input type="text" class="form-control" id="studentNameInput" placeholder="Nevil Longbottom" required="true">
  </div>
  <button type="submit" class="btn btn-primary" id="sortButton">Sort me!</button>
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
    <div class="card-body">
      <h5 class="card-title" id="student">${element.name}</h5>
      <p class="card-text" id="house">${element.house}</p>
      <a href="#" type="button" class="btn btn-danger" id="${element.id}">Expel</a>
    </div>
  </div>`;
  }
  printToDom("#firstYears", domString);
};

// create sorting hat function

const sortingHat = () => {
  const hogwartsHouses = ["Slytherin", "Ravenclaw", "Hufflepuff", "Gryffindor"];
  let houseAssignment =
    hogwartsHouses[Math.floor(Math.random() * hogwartsHouses.length)];
  return houseAssignment;
};

//capture entered student data and push to array

const grabFormInfo = (e) => {
  e.preventDefault();

  const name = document.querySelector("#studentNameInput").value;
  const house = sortingHat();

  const studentIds = students
    .map((student) => student.id)
    .sort((a, b) => a - b);

  const id = studentIds.length ? studentIds[studentIds.length - 1] + 1 : 1;

  const obj = {
    name,
    house,
    id,
  };

  if (name.length === 0) {
    dangerMessage();
  } else {
    students.push(obj);

    cardBuilder(students);

    document.querySelector("form").reset();
  }
};

// create delete function (pushes cards to voldemort's army?)

const expelStudent = (e) => {
  const targetType = e.target.type;
  const targetId = Number(e.target.id);

  if (targetType === "button") {
    const studentIndex = students.findIndex(
      (student) => student.id === targetId
    );
    students.splice(studentIndex, 1);
  }
  cardBuilder(students);
};

const init = () => {
  buttonEvents();
};

init();
