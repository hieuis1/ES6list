export function addStudent(student) {
  axios
    .post("https://651320e48e505cebc2e99e3a.mockapi.io/student", student)
    .then(() => alert("Thêm thành công"))
    .catch(() => alert("Thất bại"));
}

export function getStudents() {
  return axios.get("https://651320e48e505cebc2e99e3a.mockapi.io/student");
}
export function editStudent(student, id) {
  axios
    .put(`https://651320e48e505cebc2e99e3a.mockapi.io/${id}`, student)
    .then(() => alert("Thêm thành công"))
    .catch(() => alert("Thất bại"));
}

export const getEmployee = () => {
  return axios.get("https://651320e48e505cebc2e99e3a.mockapi.io/employee");
};

export const addEmployee = (employee) => {
  axios
    .post("https://651320e48e505cebc2e99e3a.mockapi.io/employee", employee)
    .then(() => alert("Thêm thành công"))
    .catch(() => alert("Thất bại"));
};

export const editEmployee = (employee, id) => {
  axios
    .put(`https://651320e48e505cebc2e99e3a.mockapi.io/${id}`, employee)
    .then(() => alert("Thêm thành công"))
    .catch(() => alert("Thất bại"));
};
export const getCustomer = () => {
  return axios.get("https://652a60984791d884f1fcd9dd.mockapi.io/customer");
};

export const addCustomer = (customer) => {
  axios
    .post("https://652a60984791d884f1fcd9dd.mockapi.io/customer", customer)
    .then(() => alert("Thêm thành công"))
    .catch(() => alert("Thất bại"));
};
