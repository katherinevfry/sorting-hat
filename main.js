const students = [];

//print to dom

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
}


//button event handler

const buttonEvents = () => {
document.querySelector('#formOpenButton').addEventListener('click', showForm);
document.querySelector('#sortButton').addEventListener('click', function() {
console.log('i was clicked');
});
// document.querySelector('#expelButton').addEventListener('click', cb);
}


//function to show form on button click

const showForm = () => {
  let form = `<form>
  <div>
    <label for="studentName">Student Name:</label>
    <input type="text" class="form-control" id="studentNameInput" placeholder="Nevil Longbottom" required>
  </div>
  <button type="submit" class="btn btn-primary" id="sortButton">Sort me!</button>
</form>`
printToDom ('#formDiv', form)
}

//capture entered student data and push to array

const grabFormInfo = (e) => {
  e.preventDefault();
  const nameData = document.querySelector('#studentNameInput').value;

students.name = nameData;
students.hogwartsHouse = sortingHat();

}

// create sorting hat function

const sortingHat = () => {
  const hogwartsHouses = ['Slytherin', 'Ravenclaw', 'Hufflepuff', 'Gryffindor'];
  let houseAssignment = hogwartsHouses[Math.floor(Math.random() * hogwartsHouses.length)];
  return houseAssignment;
}

//create student cards (creates cards, data from sorting hat and student array)

const cardBuilder = (taco) => {
let domString = '';
for (let i = 0; i < taco.length; i++) {
  domstring += `<div class="card" style="width: 18rem; id=${i}">
  <div class="card-body">
    <h5 class="card-title" id="newStudent">${taco[i].name}</h5>
    <p class="card-text" id="hogwartsHouse">${taco[i].hogwartsHouse}</p>
    <a href="#" class="btn btn-primary" id="expelButton">Expel</a>
  </div>
</div>`
}
}


// create delete function (pushes cards to voldemort's army?)

const init = () => {
  buttonEvents();
}

init();
