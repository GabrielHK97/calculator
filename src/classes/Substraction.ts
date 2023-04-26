import OPERATIONS from "../constants/Operations";
import Operation from "./Operation";

export default class Subtraction extends Operation {
  constructor(htmlElement: HTMLElement) {
    super(htmlElement, OPERATIONS.SUBTRACTION);
  }
  calculate(a: number, b: number): number {
    return a - b;
  }
}
