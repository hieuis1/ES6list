import { person } from "./person.js";
class student extends person {
  toan;
  ly;
  hoa;
  constructor(ma, name, address, email, toan, ly, hoa) {
    super(ma, name, address, email);
    this.toan = toan;
    this.ly = ly;
    this.hoa = hoa;
  }

  getScore() {
    return ((this.toan + this.ly + this.hoa) / 3).toFixed(1);
  }
}

export default student;
