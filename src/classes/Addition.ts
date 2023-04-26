import OPERATIONS from "../constants/Operations";
import Operation from "./Operation";

export default class Addition extends Operation {
  constructor(htmlElement: HTMLElement) {
    super(htmlElement, OPERATIONS.ADDITION);
  }
  calculate(a: number, b: number): number {
    return a + b;
  }
}
