console.log("hello")

let add = document.getElementById("add")
let input = document.getElementById("input");

let myul = document.getElementById("taskbox")

let all_task;
let all_del;

function deleteTodo(todo){
    let mydata = []

    mydata = mydata.concat(JSON.parse(localStorage.getItem("data")))

    mydata = mydata.filter((e)=>{
        return e!==todo
    })
    
    localStorage.setItem("data", JSON.stringify(mydata));  // JSON.stringify used to store data
}

function clear() {
    input.value = "";
}

// console.log(myul)

let myli = document.createElement("li");
myli.classList.add("task");


function getallTodos() {
    let mydata = []

    mydata = mydata.concat(JSON.parse(localStorage.getItem("data")))
  

    mydata.map((e) => {
        if(e== null) return ;
        myul.innerHTML += `<div class="cross">
        <li  class="check task"> ${e}</li>
        <img src="cross.png" class="delete">
        </div>
        `;

    })

    all_task = document.getElementsByTagName("li")

    Array.from(all_task).map((elem) => {

        elem.addEventListener("click", () => {
            console.log("clicked")
            let element = Array.from(elem.classList)
            //  element.find("checked") 

            let flag = element.find((e) => {
                if (e == "checked") return 1;
            })

            if (flag) {
                
                elem.classList.remove("checked")
            }
            else {

                elem.classList.add("checked")
            }

            // console.log(typeof(elem.classList))
            // console.log(elem.innerHTML)
        })
    })


}

getallTodos()




// {
//     "id":1,
//     "name":"task"
// }
all_del = document.getElementsByClassName("delete");
Array.from(all_del).map((elem) => {

    elem.addEventListener("click", () => {
        console.log("clicked")

        //  element.find("checked") 

        let delete_element = elem.parentElement
        delete_element.style.display = "none"

        let mystr = elem.parentElement.children[0].innerText
        mystr = mystr.trim()
        deleteTodo(mystr)
        
        // console.log(typeof(elem.classList))
        // console.log(elem.innerHTML)
    })

})



add.addEventListener("click", () => {
    // console.log(input.value)
    // myli.innerText = input.value  // Add text in element

    
    // myul.appendChild(myli)
    // // alert("Task added")

    // // console.log("clicked")
    // all_task = document.getElementsByTagName("li")
    all_del = document.getElementsByClassName("delete");
    if (input.value == "") {
        alert("Wrong Input");
        clear()

    }
    else {
        myul.innerHTML += `<div class="cross">
        <li  class="check task"> ${input.value}</li>
        <img src="cross.png" class="delete">
        </div>
        `;
        
        let mydata = []
        
        mydata = mydata.concat(JSON.parse(localStorage.getItem("data")))
        
        // console.log(input.value)
        mydata.push(input.value)
        
        localStorage.setItem("data", JSON.stringify(mydata));  // JSON.stringify used to store data
        // console.log((localStorage.getItem("data")))
        
        clear()
    }
   

})

// setTimeout(() => {
//     add.innerText = "hello"
// }, 5000);

add.addEventListener("click", () => {

    all_task = document.getElementsByTagName("li")
    all_del = document.getElementsByClassName("delete");
 
    // console.log(all_del)


})


// console.log(typeof(all_task)) Return the type of function

// How to convert object into array => use Array.from() function
add.addEventListener("click", () => {
    Array.from(all_task).map((elem) => {

        elem.addEventListener("click", () => {
            console.log("clicked")
            let element = Array.from(elem.classList)
            //  element.find("checked") 

            let flag = element.find((e) => {
                if (e == "checked") return 1;
            })

            if (flag) {

                elem.classList.remove("checked")
            }
            else {

                elem.classList.add("checked")
            }

            // console.log(typeof(elem.classList))
            // console.log(elem.innerHTML)
        })

    })


    Array.from(all_del).map((elem) => {

        elem.addEventListener("click", () => {

            let delete_element = elem.parentElement
            delete_element.style.display = "none"

            // deleteTodo("abhishek")
            let mystr = elem.parentElement.children[0].innerText
            mystr = mystr.trim()
            
            deleteTodo(mystr)
            
            // console.log(typeof(elem.classList))
            // console.log(elem.innerHTML)
        })
        
    })

            clear()
})

// all_task.map((elem)=>{

//     console.log(elem)
// })