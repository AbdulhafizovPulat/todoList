const elForm = document.querySelector("#add-form");
const ul = document.querySelector("#todos");
const warning = document.querySelector("#warn");
const btnTheme = document.querySelector("#btnTheme");
const Mytodos = [
  {
    title: "Kitob o'qish",
    completed: true,
    data: "2023-01-28",
  },
  {
    title: "Yugurish",
    completed: false,
    data: "2023-01-23",
  },
  {
    title: "Suzish",
    completed: true,
    data: "2023-01-20",
  },
];

function renderTodo(array) {
  ul.textContent = "";
  for (let i = 0; i < array.length; i++) {
    const newLi = document.createElement("li");
    newLi.className = "list-group-item d-flex justify-content-between";
    newLi.innerHTML = `<h3 style =' ${
      array[i].completed ? "text-decoration:line-through" : ""
    } '>${array[i].title}</h3>
              <div>
                <button class="btn btn-primary">Completed</button>
                <button class="btn btn-danger">Delete</button>
              </div>`;
    ul.appendChild(newLi);
  }
}
renderTodo(Mytodos);

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let input = evt.target.todo;
  warn.style.display = "none";
  input.className = "form-control my-3";

  if (input.value == false) {
    warn.style.display = "block";
    input.className += " border-danger";
    return;
  }

  const newTodo = {
    title: input.value,
    completed: false,
    data: "2023-01-20",
  };

  Mytodos.push(newTodo);
  renderTodo(Mytodos);
  elForm.reset();
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
