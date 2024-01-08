// console.log("abhi")

function print(i) {
  console.log(i);
}

function array() {
  let arr = [1, 2, 3, 4, 5, "abhi", "ab", "c"];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  Searching;

  let result = arr.includes("abhiiiiyg");
  console.log(result);

  let found = arr.find((element) => {
    return element == 15;
  });

  Traversing;

  map;
  filter;
  reduce;

  arr.map((elem, i) => {
    console.log(elem, i); //Here i stands for index
  });

  arr = arr.filter((elem) => {
    return elem != 3;
  });

  console.log(arr);
}

// Object-----

// key - roll number
// value - name

// let student = {1:"abhishek", 2:"abhi", 3:"dubey"}

// let fruit = {"apple":10, "mango":50, "peach":0}

// console.log(fruit.apple)
// console.log(fruit.mango)

let student = {
  1: {
    title:"abhishek",
    flag:"true"
  },

  2: {
    title:"abhi1",
    flag:"true"
  },

  3: {
    title:"abhi2",
    flag:"true"
  },
};


let mykeys = (Object.keys(student))

for(let i=0; i<mykeys.length; i++){

    let x = student[mykeys[i]]
    print(x)
}

// console.log(student[3])