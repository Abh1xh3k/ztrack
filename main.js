let add = document.getElementById("add");
let input = document.getElementById("input");
let task = document.getElementsByTagName("li");
let myul = document.getElementById("taskbox");
let all_del = "";


let str = "";

function clear() {
  input.value = "";
}

function getallTodos() {
  let mydata = JSON.parse(localStorage.getItem("data"));

  if (!mydata) return;
  let arr = Object.keys(mydata);
  

  for (let i = 0; i < arr.length; i++) {
    let title = mydata[arr[i]].title;
    let flag = mydata[arr[i]].flag;

    if (flag) {
      myul.innerHTML += `<div class="cross">
      <li  class="checked task"> ${title}</li>
      <img src="cross.png" class="delete">
      </div>
      `;
    } else {
      myul.innerHTML += `<div class="cross">
      <li  class=" task"> ${title}</li>
      <img src="cross.png" class="delete">
      </div>
      `;
    }
    // console.log(mydata[arr[i]])
  }

  check_task();
  delete_task();
}

function delete_task() {
  all_del = document.getElementsByClassName("delete");
  Array.from(all_del).map((elem) => {
    elem.addEventListener("click", () => {
      let ul = elem.parentNode;
      ul.style.display = "none";
      let mytask = elem.previousElementSibling;
      deleteTodo(mytask.innerText);
    });
  });
}

function check(elem) {
  if (elem.includes("checked")) return "checked";
  else return "unchecked";
}

function check_task() {
  let mydata = JSON.parse(localStorage.getItem("data"));
  task = document.getElementsByTagName("li");
  task = Array.from(task);

  task.map((elem) => {
    elem.addEventListener("click", () => {
      let result = check(Array.from(elem.classList));
      let str = elem.innerText;
      str = str.trim()
      if (result == "unchecked") {
      
        mydata[str].flag = true;
        elem.classList.add("checked");
        localStorage.setItem("data", JSON.stringify(mydata));
      
      } else {

        mydata[str].flag = false;
        elem.classList.remove("checked");
        localStorage.setItem("data", JSON.stringify(mydata));
      
      }
    });
  });
}

function add_task() {
  
  add.addEventListener("click", () => {
   
    let check = input.value.trim();
    if(check.length <= 0) {
    alert("Please add some task")
    clear()
    return;
  }
    myul.innerHTML += ` 
                        <div class="cross">
                        <li  class=" task"> ${input.value}</li>
                        <img src="/cross.png" class="delete">
                        </div>
        `;
    save(input.value, false);
    clear();
    delete_task();
    check_task();
  });
}

function save(value, flag) {
  let check = value.trim();
  if(check.length <= 0) {
    alert("Please add some task")
    clear()
    return;
  }
  
  let mydata = {
    title: value,
    flag: flag,
  };

  let getallTodos = JSON.parse(localStorage.getItem("data"));

  let newobj = {};
  value = value.trim();
  newobj[value] = mydata;

  let combinedObject = { ...getallTodos, ...newobj };


  localStorage.setItem("data", JSON.stringify(combinedObject));
}

function deleteTodo(mystr) {
  let getallTodos = JSON.parse(localStorage.getItem("data"));
  mystr = mystr.trim();
  delete getallTodos[mystr];
  // (getallTodos[andband].flag == "undefined")

  localStorage.setItem("data", JSON.stringify(getallTodos));
}

add_task();
delete_task();
check_task();
getallTodos();
