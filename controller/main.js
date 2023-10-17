import {
  addActive,
  deleteActive,
  navList,
  addHide,
  removeHide,
  showCustomer,
  showStudent,
  showEmploye,
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
  getEmployee,
} from "../model/callData.js";

const addNewStudent = document.getElementById("addst");
const addNewEmployee = document.getElementById("addem");
const addNewCustomer = document.getElementById("addcm");
const editStudentBtn = document.getElementById("editStudentBtn");
const sortCu = document.getElementById("sortCu");
const sortEM = document.getElementById("sortEm");
const sortSt = document.getElementById("sortSt");
const searchStudent = document.getElementById("searchStudent");
const searchEmployee = document.getElementById("searchEmployee");
const searchCustomer = document.getElementById("searchCustomer");
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
    getStudents().then((data) => {
      showStudent(data.data);
    });
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
    getEmployee().then((data) => {
      showStudent(data.data);
    });
  }
});
addNewCustomer.addEventListener("click", () => {
  let ma = +document.getElementById("idcu").value;
  let name = document.getElementById("namecu").value;
  let address = document.getElementById("diachicu").value;
  let email = document.getElementById("emailcu").value;
  let cp = document.getElementById("ctcu").value;
  let money = +document.getElementById("moneycu").value;
  let cm = document.getElementById("cmcu").value;
  let customers = createCustomer(ma, name, address, email, cp, money, cm);
  if (customers) {
    console.log(customers);
    addCustomer(customers);
    getCustomer().then((data) => {
      showCustomer(data.data);
    });
  }
});

sortCu.addEventListener("change", (e) => {
  getCustomer().then((data) => {
    let listData = data.data;
    if (e.target.value == "than") {
      listData.sort((a, b) => b.name.localeCompare(a.name));
    } else if (e.target.value == "left") {
      listData.sort((a, b) => a.name.localeCompare(b.name));
    }
    showCustomer(listData);
  });
  getCustomer().then((data) => {
    showCustomer(data.data);
  });
});

sortSt.addEventListener("change", (e) => {
  getStudents().then((data) => {
    let listData = data.data;

    if (e.target.value == "than") {
      listData.sort((a, b) => b.name.localeCompare(a.name));
    } else if (e.target.value == "left") {
      listData.sort((a, b) => a.name.localeCompare(b.name));
    }
    showStudent(listData);
  });
});

sortEM.addEventListener("change", (e) => {
  getEmployee().then((data) => {
    let listData = data.data;
    if (e.target.value == "than") {
      listData.sort((a, b) => b.name.localeCompare(a.name));
    } else if (e.target.value == "left") {
      listData.sort((a, b) => a.name.localeCompare(b.name));
    }
    showEmploye(listData);
  });
});

searchEmployee.addEventListener("keyup", (e) => {
  getEmployee().then((data) => {
    let listData = [];
    data.data.forEach((item) => {
      if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        listData.push(item);
      }
    });
    showEmploye(listData);
  });
});

searchCustomer.addEventListener("keyup", (e) => {
  getCustomer().then((data) => {
    let listData = [];
    data.data.forEach((item) => {
      if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        listData.push(item);
      }
    });
    showCustomer(listData);
  });
});

searchStudent.addEventListener("keyup", (e) => {
  console.log(e.target.value);
  getStudents().then((data) => {
    let listData = [];
    data.data.forEach((item) => {
      if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        listData.push(item);
      }
    });
    showStudent(listData);
  });
});
