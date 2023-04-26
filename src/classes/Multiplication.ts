import OPERATIONS from "../constants/Operations";
import Operation from "./Operation";

export default class Multiplication extends Operation {
  constructor(htmlElement: HTMLElement) {
    super(htmlElement, OPERATIONS.MULTIPLICATION);
  }
  calculate(a: number, b: number): number {
    return a * b;
  }
}
