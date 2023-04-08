const taskContainer =document.querySelector(".task__container");
const globalstore = []; //array of objects
console.log(taskContainer);



const generatenewcard =(taskdata) =>  `
<div class="row">
 <div class="col col-sm-12 col-md-6 col-lg-4" id=${taskdata.id}>
<div class="card">
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-success"><i class="fas fa-pencil-alt"></i></button>
<button type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
  </div>
  <div class="card-body">
    <img class="card-img-top" src=${taskdata.imageUrl} alt="..." style="width: 1250px; height: 600px;">

    <h5 class="card-title mt-3  fw-bolder text-primary">${taskdata.taskTitle} </h5>
    <p class="card-text">${taskdata.taskDesc}</p>
    <a href="#" class="btn btn-primary">${taskdata.taskType}</a>
  </div>
</div>
</div>
`
;


const  loadInitialCardData = () => {
// local storage to get card data
const getcarddata = localstorage.getitem("tasky");

//convert to normal data
const {cards} = JSON.parse("getcarddata");

// loop over those object to create cards to create html card
cards.map((cardobject) => {
  taskContainer.insertAdjacentElement("beforeend", generatenewcard(cardobject));



//update our globalstore;
globalstore.push(cardobject0);
}

};
const SaveChanges = () => {
  const taskdata = {
    id : `${Date.now()}` , // $(xyz) in this xyz is a dynamic value which change in future, and it returns unique number every second
    imageUrl : document.getElementById("imageurl").value, // get element by id goes to parent class to find whih tag has the particular id
    taskTitle : document.getElementById("tasktitle").value,
    taskType: document.getElementById("tasktype").value,
    taskDesc: document.getElementById("taskdesc").value

  };



;
  taskContainer.insertAdjacentHTML("beforeend", newCard);
  globalstore.push(taskdata);
  localStorage.setitem("tasky", JSON.stringify({cards:globalstore})); // setting an item in local storage , stingify takes object of objects and convert them into arrays

  };
  
// page refresh case data to get deleted
//features, edit, delete

// page refreshing cause the data to get deleted
//API - Application programming interface
// local storage - accessing application via local storage
//interface is middle man
//
