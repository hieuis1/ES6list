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
