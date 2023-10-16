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
              <i class="fa-solid fa-pen-to-square edit" data-bs-toggle="modal" data-bs-target="#editStudent" onclick="stEdit(${item.id})"></i>
              <!-- Modal -->
              <div class="modal fade" id="editStudent" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form class="add">
                          <div class="mb-3">
                            <label class="form-label">Nhập mã</label>
                            <input type="email" class="form-control" id="editStID" aria-describedby="emailHelp">
                          </div>
                          <div class="mb-3">
                            <label class="form-label">Nhập tên</label>
                            <input  class="form-control" id="editStName">
                          </div>
                          <div class="mb-3">
                            <label class="form-label">Nhập địa chỉ</label>
                            <input  class="form-control" id="editStAddress">
                          </div>
                          <div class="mb-3">
                            <label class="form-label">Nhập Email</label>
                            <input  class="form-control" id="editStEmail">
                          </div>
                          <div class="mb-3">
                            <label class="form-label">Nhập điểm toán</label>
                            <input  class="form-control" id="editStToan">
                          </div>
                          <div class="mb-3">
                            <label class="form-label">Nhập điểm lý</label>
                            <input  class="form-control" id="editStLy">
                          </div>
                          <div class="mb-3">
                            <label class="form-label">Nhập điểm hóa</label>
                            <input  class="form-control" id="editStHoa">
                          </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary" id="editStudentBtn" onclick="addEditSt(${item.id})" data-bs-dismiss="modal">Lưu thay đổi</button>
                    </div>
                  </div>
                </div>
              </div>
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
              <i class="fa-solid fa-pen-to-square edit" data-bs-toggle="modal" data-bs-target="#editEmployee" onclick="emEdit(${item.id})"></i>
              <!-- Modal -->
              <div class="modal fade" id="editEmployee" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Sửa nhân viên</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form class="add">
                          <div class="mb-3">
                            <label class="form-label">Nhập mã</label>
                            <input type="email" class="form-control" id="editEmID" aria-describedby="emailHelp">
                          </div>
                          <div class="mb-3">
                            <label class="form-label">Nhập tên</label>
                            <input  class="form-control" id="editEmName">
                          </div>
                          <div class="mb-3">
                            <label class="form-label">Nhập địa chỉ</label>
                            <input  class="form-control" id="editEmAddress">
                          </div>
                          <div class="mb-3">
                            <label class="form-label">Nhập Email</label>
                            <input  class="form-control" id="editEmEmail">
                          </div>
                          <div class="mb-3">
                            <label class="form-label">Nhập ngày làm</label>
                            <input  class="form-control" id="editEmDay">
                          </div>
                          <div class="mb-3">
                            <label class="form-label">Nhập lương</label>
                            <input  class="form-control" id="editEmSalary">
                          </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary" onclick="addEditEm(${item.id})"  data-bs-dismiss="modal" >Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
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
              <i class="fa-solid fa-pen-to-square edit" data-bs-toggle="modal" data-bs-target="#editCustomer" onclick="cuEdit(${item.id})"></i>


              <div class="modal fade" id="editCustomer" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Sửa nhân viên</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <form class="add">
                        <div class="mb-3">
                          <label class="form-label">Nhập mã</label>
                          <input type="email" class="form-control" id="editCuID" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Nhập tên</label>
                          <input  class="form-control" id="editCuName">
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Nhập địa chỉ</label>
                          <input  class="form-control" id="editCuAddress">
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Nhập Email</label>
                          <input  class="form-control" id="editCuEmail">
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Nhập ngày làm</label>
                          <input  class="form-control" id="editCuCp">
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Nhập lương</label>
                          <input  class="form-control" id="editCuMoney">
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Nhập lương</label>
                          <input  class="form-control" id="editCuCm">
                        </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="addEditCu(${item.id})">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
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
