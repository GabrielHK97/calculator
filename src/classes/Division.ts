import OPERATIONS from "../constants/Operations";
import Operation from "./Operation";

export default class Division extends Operation {
  constructor(htmlElement: HTMLElement) {
    super(htmlElement, OPERATIONS.DIVISION);
  }
  calculate(a: number, b: number): number {
    return a / b;
  }
}
