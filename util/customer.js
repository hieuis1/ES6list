import { person } from "./person.js";

class customer extends person {
  company;
  money;
  comment;
  constructor(ma, name, address, email, company, money, comment) {
    super(ma, name, address, email);
    this.comment = comment;
    this.company = company;
    this.money = money;
  }
}
export default customer;
