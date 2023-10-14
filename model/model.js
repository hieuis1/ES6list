import { getCustomer, getStudents, getEmployee } from "./callData.js";

// add active
export const navList = document.querySelectorAll(".nav-item a");
const employeesList = document.getElementById("employees");
const sutudentsList = document.getElementById("students");
const customersList = document.getElementById("customers");

export function deleteActive() {
  navList.forEach((item) => {
    item.classList.remove("active");
  });
}

export function addActive(item) {
  item.classList.add("active");
}

export function addHide() {
  employeesList.classList.add("hide");
  sutudentsList.classList.add("hide");
  customersList.classList.add("hide");
}

export function removeHide(item) {
  if (item == "Danh sách học sinh") {
    sutudentsList.classList.remove("hide");
    getStudents().then((data) => {
      let sl = data.data
        .map((item) => {
          return `
          <tr>
            <th>${item.ma}</th>
            <th>${item.name}</th>
            <th>${item.address}</th>
            <th>${item.email}</th>
            <th>${item.toan}</th>
            <th>${item.ly}</th>
            <th>${item.hoa}</th>
            <th>
              <i class="fa-solid fa-trash trash" onclick="removeSt(${item.id})"></i>
              <i class="fa-solid fa-pen-to-square edit"></i>
            </th>
          </tr>
          `;
        })
        .join("");
      document.getElementById("listStudent").innerHTML = sl;
    });
  }
  if (item == "Danh sánh nhân viên") {
    employeesList.classList.remove("hide");
    getEmployee().then((data) => {
      console.log(data.data);
      let em = data.data
        .map((item) => {
          console.log(item);
          return `
          <tr>
            <th>${item.ma}</th>
            <th>${item.name}</th>
            <th>${item.address}</th>
            <th>${item.email}</th>
            <th>${item.day}</th>
            <th>${item.salary}</th>
            <th>
              <i class="fa-solid fa-trash trash" onclick="removeEm(${item.id})"></i>
              <i class="fa-solid fa-pen-to-square edit"></i>
            </th>
          </tr>
          `;
        })
        .join("");
      document.getElementById("listEmployee").innerHTML = em;
    });
  }
  if (item == "Danh sách khách hàng") {
    customersList.classList.remove("hide");
    getCustomer().then((data) => {
      console.log(data.data);
      let cu = data.data
        .map((item) => {
          console.log(item);
          return `
          <tr>
            <th>${item.ma}</th>
            <th>${item.name}</th>
            <th>${item.address}</th>
            <th>${item.email}</th>
            <th>${item.company}</th>
            <th>${item.money}</th>
            <th>${item.comment}</th>
            <th>
              <i class="fa-solid fa-trash trash" onclick="removeCu(${item.id})"></i>
              <i class="fa-solid fa-pen-to-square edit"></i>
            </th>
          </tr>
          `;
        })
        .join("");
      document.getElementById("listCustomer").innerHTML = cu;
    });
  }
}

removeHide("Danh sách học sinh");
