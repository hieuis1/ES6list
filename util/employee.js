import { person } from "./person.js";

class employee extends person {
  day;
  salary;
  constructor(ma, name, address, email, day, salary) {
    super(ma, name, address, email);
    this.salary = salary;
    this.day = day;
  }
  getSalary() {
    return this.salary * this.day;
  }
}

export default employee;
