import OPERATIONS from "../constants/Operations";
import Operation from "./Operation";

export default class Percentage extends Operation {
  constructor() {
    super(new EventTarget() as HTMLElement, OPERATIONS.PERCENTAGE);
  }
  calculate(a: number, b: number): number {
    return (a * b) / 100;
  }
}
