const elForm = document.querySelector("#add-form");
const ul = document.querySelector("#todos");
const warning = document.querySelector("#warn");
const btnTheme = document.querySelector("#btnTheme");
const elData = document.querySelector("#data");
const elInput = document.querySelector("#todo");

let Mytodos = [
  {
    title: "Kitob o'qish",
    completed: false,
    data: "2023-1-2/21:32",
    id: 1,
  },
  {
    title: "Yugurish",
    completed: false,
    data: "2023-4-23/2:32",
    id: 2,
  },
  {
    title: "Suzish",
    completed: false,
    data: "2023-11-20/5:17",
    id: 3,
  },
];

function generateDate(time) {
  const date = new Date(time);
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  const minute =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  return `${hour}:${minute} / ${day}.${month}.${year}`;
}

function renderTodo(array) {
  ul.textContent = "";
  for (let i = 0; i < array.length; i++) {
    const resultDate = generateDate(array[i].data);
    const newLi = document.createElement("li");
    newLi.className = "list-group-item d-flex justify-content-between";
    newLi.innerHTML = `
    <div>
    <h3 style =' ${
      array[i].completed ? "text-decoration:line-through" : ""
    } '>${array[i].title}</h3>
   <span>${resultDate}</span>
    </div>
              <div>
                <button data-id="${
                  array[i].id
                }" class="btn btn-primary">Completed</button>
                <button data-id="${
                  array[i].id
                }" class="btn btn-danger">Delete</button>
                <button data-id="${
                  array[i].id
                }" class="btn btn-success">Edit</button>
              </div>`;
    ul.appendChild(newLi);
  }
}
renderTodo(Mytodos);

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  warn.style.display = "none";
  elInput.className = "form-control my-3";
  if ((elInput.value, elData.value === false)) {
    warn.style.display = "block";
    elInput.className += " border-danger";
    return;
  }

  const newTodo = {
    title: elInput.value,
    completed: false,
    data: elData.value,
    id: Mytodos.length > 0 ? Mytodos[Mytodos.length - 1].id + 1 : 1,
  };

  Mytodos.push(newTodo);
  renderTodo(Mytodos);
  elForm.reset();
});

// complete & delete & edit
ul.addEventListener("click", (evt) => {
  evt.preventDefault();
  const doIt = evt.target;
  const id = Number(doIt.dataset.id);
  if (doIt.className.includes("btn-primary")) {
    for (let i = 0; i < Mytodos.length; i++) {
      if (Mytodos[i].id === id) {
        Mytodos[i].completed = !Mytodos[i].completed;
      }
    }
    renderTodo(Mytodos);
  }
  if (doIt.className.includes("btn-danger")) {
    const resultTodo = [];
    for (let i = 0; i < Mytodos.length; i++) {
      const item = Mytodos[i];
      if (item.id != id) {
        resultTodo.push(item);
      }
    }
    ul.textContent = "";
    Mytodos = resultTodo;
    renderTodo(Mytodos);
  }
  if (doIt.className.includes("btn-success")) {
    for (let i = 0; i < Mytodos.length; i++) {
      const resultTodo = Mytodos[i];
      if (resultTodo.id === id) {
        resultTodo.title = elInput.value;
        resultTodo.data = elData.value;
      }
    }

    renderTodo(Mytodos);
  }
});

// light and dark theme
let theme = "light";
btnTheme.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (theme === "light") {
    document.body.className = "night";
    theme = "dark";
    btnTheme.textContent = "Tungi rejim";
  } else if (theme === "dark") {
    document.body.className = "day";
    theme = "light";
    btnTheme.textContent = "Kunduzgi rejim";
  }
});
