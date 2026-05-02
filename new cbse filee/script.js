let students = JSON.parse(localStorage.getItem("students")) || [];

function getResult() {
  let roll = document.getElementById("roll").value;
  let dob = document.getElementById("dob").value;

  let s = students.find(x => x.roll == roll && x.dob == dob);

  if (s) {
    localStorage.setItem("result", JSON.stringify(s));
    window.location = "result.html";
  } else {
    alert("Invalid Details");
  }
}

function login() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  if (u == "admin" && p == "1234") {
    alert("Login Success");
  } else {
    alert("Wrong");
  }
}

function addStudent() {
  let s = {
    name: nameInput.value,
    father: fatherInput.value,
    roll: rollInput.value,
    dob: dobInput.value,
    marks: {
      maths: +mathsInput.value,
      english: +engInput.value,
      science: +sciInput.value,
      sst: +sstInput.value,
      hindi: +hinInput.value
    }
  };

  students.push(s);
  localStorage.setItem("students", JSON.stringify(students));

  alert("Saved");
}

window.onload = function () {
  let s = JSON.parse(localStorage.getItem("result"));

  if (!s) return;

  name.innerText = s.name;
  father.innerText = s.father;
  rollno.innerText = s.roll;
  dob.innerText = s.dob;

  maths.innerText = s.marks.maths;
  english.innerText = s.marks.english;
  science.innerText = s.marks.science;
  sst.innerText = s.marks.sst;
  hindi.innerText = s.marks.hindi;

  let total = Object.values(s.marks).reduce((a,b)=>a+b,0);
  let per = total / 5;

  percentage.innerText = "Percentage: " + per + "%";

  if(per >= 33){
    status.innerText = "PASS";
    status.style.color = "green";
  } else {
    status.innerText = "FAIL";
    status.style.color = "red";
  }
};