import { getStudents, getEmployee, getCustomer } from "./callData.js";

let listStudent;
let listEmployee;
let listCustomer;
getStudents().then((data) => {
  listStudent = data.data;
});
getEmployee().then((data) => {
  listEmployee = data.data;
});
getCustomer().then((data) => {
  listCustomer = data.data;
});

export const checkEmpty = (string) => {
  if (string.length == 0) {
    return false;
  }
  return true;
};

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const checkScore = (score) => {
  if (score >= 0 && score < 11) {
    return true;
  } else {
    return false;
  }
};

export const checkidStudent = (id) => {
  let count = 0;
  if (typeof id == "number") {
    listStudent.forEach((element) => {
      if (id === element.ma) {
        return false;
      } else {
        count++;
      }
    });
    if (count == listStudent.length) {
      return true;
    }
  } else {
    return false;
  }
};
export const checkidCustomer = (id) => {
  let count = 0;
  if (typeof id == "number") {
    listCustomer.forEach((element) => {
      if (id === element.ma) {
        return false;
      } else {
        count++;
      }
    });
    if (count == listCustomer.length) {
      return true;
    }
  } else {
    return false;
  }
};

export const checkidEmployee = (id) => {
  let count = 0;
  if (typeof id == "number") {
    listEmployee.forEach((element) => {
      if (id === element.ma) {
        return false;
      } else {
        count++;
      }
    });
    if (count == listEmployee.length) {
      return true;
    }
  } else {
    return false;
  }
};

export const checkNum = (num) => {
  if (typeof num == "number" && num > 0) {
    return true;
  } else {
    return false;
  }
};
