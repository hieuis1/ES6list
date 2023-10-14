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
} from "../model/callData.js";
const addNewStudent = document.getElementById("addst");
const addNewEmployee = document.getElementById("addem");
const addNewCustomer = document.getElementById("addcm");

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
  console.log(student);
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
});

addNewCustomer.addEventListener("click", () => {
  let ma = +document.getElementById("idcu").value;
  let name = document.getElementById("namecu").value;
  let address = document.getElementById("diachicu").value;
  let email = document.getElementById("emailcu").value;
  let ct = document.getElementById("ctcu").value;
  let money = +document.getElementById("moneycu").value;
  let cm = document.getElementById("cmcu").value;
  let customer = createCustomer(ma, name, address, email, ct, money, cm);
  if (customer) {
    addCustomer(customer);
  }
});
