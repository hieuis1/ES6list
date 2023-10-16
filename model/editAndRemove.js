const removeSt = (id) => {
  axios
    .delete(`https://651320e48e505cebc2e99e3a.mockapi.io/student/${id}`)
    .then(() => alert("Xóa thành công"));
};

const removeEm = (id) => {
  axios
    .delete(`https://651320e48e505cebc2e99e3a.mockapi.io/employee/${id}`)
    .then(() => alert("Xóa thành công"));
};
const removeCu = (id) => {
  axios
    .delete(`https://652a60984791d884f1fcd9dd.mockapi.io/customer/${id}`)
    .then(() => alert("Xóa thành công"));
};

const stEdit = (id) => {
  axios
    .get(`https://651320e48e505cebc2e99e3a.mockapi.io/student/${id}`)
    .then((data) => {
      let { ma, name, email, address, toan, ly, hoa } = data.data;
      console.log(email, address);
      document.getElementById("editStID").value = ma;
      document.getElementById("editStName").value = name;
      document.getElementById("editStEmail").value = email;
      document.getElementById("editStAddress").value = address;
      document.getElementById("editStToan").value = toan;
      document.getElementById("editStLy").value = ly;
      document.getElementById("editStHoa").value = hoa;
    });
};

const emEdit = (id) => {
  axios
    .get(`https://651320e48e505cebc2e99e3a.mockapi.io/employee/${id}`)
    .then((data) => {
      let { ma, name, email, address, day, salary } = data.data;
      console.log(email, address);
      document.getElementById("editEmID").value = ma;
      document.getElementById("editEmName").value = name;
      document.getElementById("editEmEmail").value = email;
      document.getElementById("editEmAddress").value = address;
      document.getElementById("editEmDay").value = day;
      document.getElementById("editEmSalary").value = salary;
    });
};

const cuEdit = (id) => {
  axios
    .get(`https://652a60984791d884f1fcd9dd.mockapi.io/customer/${id}`)
    .then((data) => {
      let { ma, name, email, address, company, comment, money } = data.data;
      console.log(email, address);
      document.getElementById("editCuID").value = ma;
      document.getElementById("editCuName").value = name;
      document.getElementById("editCuEmail").value = email;
      document.getElementById("editCuAddress").value = address;
      document.getElementById("editCuCp").value = company;
      document.getElementById("editCuMoney").value = money;
      document.getElementById("editCuCm").value = comment;
    });
};

const addEditSt = (id) => {
  let ma = document.getElementById("editStID").value;
  let name = document.getElementById("editStName").value;
  let email = document.getElementById("editStEmail").value;
  let address = document.getElementById("editStAddress").value;
  let toan = document.getElementById("editStToan").value;
  let ly = document.getElementById("editStLy").value;
  let hoa = document.getElementById("editStHoa").value;
  let student = { ma, name, email, address, toan, ly, hoa };
  if (student) {
    axios
      .put(`https://651320e48e505cebc2e99e3a.mockapi.io/student/${id}`, student)
      .then(() => alert("Sửa thành công"))
      .catch(() => alert("Thất bại"));
  }
};

const addEditEm = (id) => {
  let ma = document.getElementById("editEmID").value;
  let name = document.getElementById("editEmName").value;
  let email = document.getElementById("editEmEmail").value;
  let address = document.getElementById("editEmAddress").value;
  let day = document.getElementById("editEmDay").value;
  let salary = document.getElementById("editEmSalary").value;
  let employee = { ma, name, email, address, day, salary };
  if (employee) {
    axios
      .put(
        `https://651320e48e505cebc2e99e3a.mockapi.io/employee/${id}`,
        employee
      )
      .then(() => alert("Sửa thành công"))
      .catch(() => alert("Thất bại"));
  }
};

const addEditCu = (id) => {
  let ma = document.getElementById("editCuID").value;
  let name = document.getElementById("editCuName").value;
  let email = document.getElementById("editCuEmail").value;
  let address = document.getElementById("editCuAddress").value;
  let company = document.getElementById("editCuCp").value;
  let money = document.getElementById("editCuMoney").value;
  let comment = document.getElementById("editCuCm").value;
  let customer = { ma, name, email, address, company, money, comment };
  if (customer) {
    axios
      .put(
        `https://651320e48e505cebc2e99e3a.mockapi.io/employee/${id}`,
        customer
      )
      .then(() => alert("Sửa thành công"))
      .catch(() => alert("Thất bại"));
  }
};
