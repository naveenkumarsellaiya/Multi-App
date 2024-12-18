let showInput = document.querySelector(".showInput");
let main = document.getElementById("main");
let Theme = document.getElementById("Theme");
let body = document.querySelector("body");
let inputvalue = document.getElementById("inputvalue");
let text = document.getElementById("text");
let content = document.querySelector(".content");
let add = document.getElementById("Addbtn");
const time = new Date();
const newtime = time.toLocaleTimeString();
let editingNote = null;
let currTime = document.getElementById("currTime");

currTime.innerHTML = newtime;
//toggle in input elements
showInput.addEventListener("click", () => {
  main.classList.toggle("toggle");
  console.log("welcome");
});
let errors = document.getElementById("Error");
//Addbtn
add.addEventListener("click", (event) => {
  event.preventDefault();

  if (inputvalue.value.trim() === "" || text.value.trim() === "") {
    errors.style.display = "flex";
    return;
  }

  const time = new Date().toLocaleTimeString();
  const div = document.createElement("div");
  div.setAttribute("class", "details");

  div.innerHTML = `
    <div>
    <h2 id="heading">${inputvalue.value}</h2>
    <p id="para">${text.value}</p>
    </div>
    <div class="btn">
    <button onclick="deletes(this)">Delete</button>
  <button onclick="Edit(this)">Edit</button>
  </div>
  <p class="currTime">${time}</p>
   `;
  if (editingNote) {
    editingNote.innerHTML = div.innerHTML;
    editingNote = null;
  } else {
    content.append(div);
  }

  main.classList.toggle("toggle");
  inputvalue.value = "";
  text.value = "";
});

//Cancelbtn
function cancelbtn() {
  main.classList.remove("toggle");
}

//Delete
function deletes(event) {
  if (confirm("Are you sure you want to delete this note?")) {
    const note = event.parentElement.parentElement;
    note.remove();
    console.log("Note deleted");
  }
}
//Editbtn
function Edit(edit) {
  editingNote = edit.parentElement.parentElement;
  const title = editingNote.querySelector("#heading").innerHTML;
  const para = editingNote.querySelector("#para").innerHTML;
  inputvalue.value = title;
  text.value = para;
  main.classList.toggle("toggle");
  // note.remove()
}

//Theme
// let puls=document.querySelector(".puls")
let details = document.querySelector(".details");
let inputDetails = document.querySelector(".inputDetails");

Theme.addEventListener("click", () => {
  body.classList.toggle("theme");
  body.classList.contains("theme")
    ? (Theme.innerHTML = '<i class="fas fa-moon" title="GO TO Dark Mode"></i>')
    : (Theme.innerHTML = '<i class="fas fa-sun" title="GO TO Light Mode"></i>');
  showInput.classList.toggle("new");
  inputDetails.classList.toggle("changeColor");
});

inputvalue.addEventListener("click", () => {
  errors.style.display = "none";
});
text.addEventListener("click", () => {
  errors.style.display = "none";
});
