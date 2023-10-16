import {
  addActive,
  deleteActive,
  navList,
  addHide,
  removeHide,
} from "../model/model.js";
import {
  createStudent,
  createEmployee,
  createCustomer,
} from "../model/create.js";
import {
  getStudents,
  addStudent,
  addEmployee,
  getCustomer,
  addCustomer,
  editStudent,
} from "../model/callData.js";

const addNewStudent = document.getElementById("addst");
const addNewEmployee = document.getElementById("addem");
const addNewCustomer = document.getElementById("addcm");
const editStudentBtn = document.getElementById("editStudentBtn");
const sortCu = document.getElementById("sortCu");
const sortEM = document.getElementById("sortEM");
const sortSt = document.getElementById("sortSt");
console.log(addNewEmployee);
navList.forEach((item) => {
  item.addEventListener("click", () => {
    deleteActive();
    addActive(item);
    addHide();
    removeHide(item.innerText);
  });
});

addNewStudent.addEventListener("click", () => {
  let ma = +document.getElementById("idst").value;
  let name = document.getElementById("namest").value;
  let address = document.getElementById("diachist").value;
  let email = document.getElementById("emailst").value;
  let toan = +document.getElementById("toanst").value;
  let ly = +document.getElementById("lyst").value;
  let hoa = +document.getElementById("hoast").value;
  let student = createStudent(ma, name, address, email, toan, ly, hoa);
  if (student) {
    addStudent(student);
  }
});

addNewEmployee.addEventListener("click", () => {
  let ma = +document.getElementById("idem").value;
  let name = document.getElementById("nameem").value;
  let address = document.getElementById("diachiem").value;
  let email = document.getElementById("emailem").value;
  let day = +document.getElementById("dayem").value;
  let salary = +document.getElementById("moneyem").value;
  let employee = createEmployee(ma, name, address, email, day, salary);
  if (employee) {
    addEmployee(employee);
  }
  document.getElementById("editStudent").classList.add("hide");
});
