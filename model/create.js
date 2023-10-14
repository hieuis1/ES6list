import student from "../util/student.js";
import employee from "../util/employee.js";
import customer from "../util/customer.js";
import {
  checkidStudent,
  checkidEmployee,
  checkEmpty,
  checkScore,
  validateEmail,
  checkNum,
  checkidCustomer,
} from "./validation.js";

export const createStudent = (ma, name, address, email, toan, ly, hoa) => {
  const mess = document.getElementById("stMess");
  if (
    checkEmpty(ma) &&
    checkEmpty(name) &&
    checkEmpty(email) &&
    checkEmpty(address) &&
    checkEmpty(toan) &&
    checkEmpty(ly) &&
    checkEmpty(hoa)
  ) {
    if (checkidStudent(ma) == true) {
      if (validateEmail(email)) {
        if (checkScore(toan) && checkScore(ly) && checkScore(hoa)) {
          if (checkScore(toan) && checkScore(hoa) && checkScore(ly)) {
            mess.innerText = "";
            return new student(ma, name, address, email, toan, ly, hoa);
          } else {
            mess.innerText = "Điểm không hợp lệ";
          }
        } else {
          mess.innerText = "Điểm không hợp lệ";
        }
      } else {
        mess.innerText = "Email ko hợp lệ";
      }
    } else {
      mess.innerText = "ID không hợp lệ";
    }
  } else {
    mess.innerText = "Không được để trống";
  }
};

export const createEmployee = (ma, name, address, email, day, salary) => {
  const mess = document.getElementById("emMess");
  if (
    checkEmpty(ma) &&
    checkEmpty(name) &&
    checkEmpty(email) &&
    checkEmpty(address) &&
    checkEmpty(day) &&
    checkEmpty(salary)
  ) {
    if (checkidEmployee(ma)) {
      if (validateEmail(email)) {
        if (checkNum(day)) {
          if (checkNum(salary)) {
            mess.innerText = "";
            return new employee(ma, name, address, email, day, salary);
          } else {
            mess.innerText = "Lương làm không hợp lệ";
          }
        } else {
          mess.innerText = "Ngày làm không hợp lệ";
        }
      } else {
        mess.innerText = "Email ko hợp lệ";
      }
    } else {
      mess.innerText = "ID không hợp lệ";
    }
  } else {
    mess.innerText = "Không được để trống";
  }
};

export const createCustomer = (ma, name, address, email, ct, money, cm) => {
  const mess = document.getElementById("cuMess");
  if (
    checkEmpty(ma) &&
    checkEmpty(name) &&
    checkEmpty(email) &&
    checkEmpty(address) &&
    checkEmpty(ct) &&
    checkEmpty(money) &&
    checkEmpty(cm)
  ) {
    if (checkidCustomer(ma)) {
      if (validateEmail(email)) {
        if (checkNum(money)) {
          return new customer(ma, name, address, email, ct, money, cm);
        } else {
          mess.innerText = "Trị giá hóa đơn không hợp lệ";
        }
      } else {
        mess.innerText = "Email ko hợp lệ";
      }
    } else {
      mess.innerText = "ID không hợp lệ";
    }
  } else {
    mess.innerText = "Không được để trống";
  }
};
