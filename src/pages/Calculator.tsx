import { useEffect, useState } from "react";
import Addition from "../classes/Addition";
import Division from "../classes/Division";
import Multiplication from "../classes/Multiplication";
import Operation from "../classes/Operation";
import Percentage from "../classes/Percentage";
import Subtraction from "../classes/Substraction";
import OPERATIONS from "../constants/Operations";
import "../styles/calculator.css";
import "../styles/calculator.css";

export default function Calculator() {
  const noOperation: Operation = new Operation(
    new EventTarget() as HTMLElement,
    OPERATIONS.NO_OPERATION
  );

  const [screenValue, setScreenValue] = useState("0");
  const [firstRegister, setFirstRegister] = useState("0");
  const [secondRegister, setSecondRegister] = useState("0");
  const [operationRegister, setOperationRegister] = useState(noOperation);
  const [keepCalculating, setKeepCalculating] = useState(false);
  const [clearAll, setClearAll] = useState(true);

  useEffect(() => {
    operationRegister.toggle();
  }, [operationRegister]);

  function reset(): void {
    if (clearAll) {
      operationRegister.untoggle();
      setOperationRegister(noOperation);
      setFirstRegister("0");
    } else {
      operationRegister.toggle();
      setClearAll(true);
    }
    setSecondRegister("0");
    setScreenValue("0");
  }

  function changeSignal(): void {
    const invertSignal = (current: string) => {
      const number = num2str(str2num(current) * -1);
      setScreenValue(number);
      return number;
    };
    keepCalculating
      ? setFirstRegister((current) => invertSignal(current))
      : setSecondRegister((current) => invertSignal(current));
  }

  function calculate(): void {
    const result = operationRegister.calculate(
      str2num(firstRegister),
      str2num(secondRegister)
    );
    setScreenValue(num2str(result));
    setFirstRegister(num2str(result));
  }

  function calculatePercentage(): void {
    const operationPercentage = new Percentage();
    const result =
      operationRegister.getType() === OPERATIONS.MULTIPLICATION ||
      operationRegister.getType() === OPERATIONS.DIVISION
        ? operationPercentage.calculate(1, str2num(secondRegister))
        : operationPercentage.calculate(
            str2num(firstRegister),
            str2num(secondRegister)
          );
    setScreenValue(num2str(result));
    setSecondRegister(num2str(result));
  }

  function showResult(): void {
    calculate();
    setKeepCalculating(true);
  }

  function setOperation(operation: Operation): void {
    keepCalculating ? setKeepCalculating(false) : calculate();
    setSecondRegister("0");
    setOperationRegister(operation);
  }

  function setDigitOnScreen(digit: string): void {
    setClearAll(false);
    if (keepCalculating) {
      setSecondRegister("0");
    }
    if (operationRegister.getToggled()) operationRegister.untoggle();
    const pushDigit = (current: string) => {
      const number = current === "0" ? digit : current + digit;
      setScreenValue(number);
      return number;
    };
    operationRegister.getType() === OPERATIONS.NO_OPERATION
      ? setFirstRegister((current) => pushDigit(current))
      : setSecondRegister((current) => pushDigit(current));
  }

  function str2num(str: string): number {
    return parseFloat(str.replace(",", "."));
  }

  function num2str(num: number): string {
    return num.toString().replace(".", ",");
  }

  return (
    <div className="page">
      <div className="shell">
        <div className="calculator">
          <div className="screen">{screenValue}</div>
          <div className="pad">
            <div className="button reset" onClick={() => reset()}>
              {clearAll ? "AC" : "C"}
            </div>
            <div className="button reset" onClick={() => changeSignal()}>
              +/-
            </div>
            <div className="button reset" onClick={() => calculatePercentage()}>
              %
            </div>
            <div
              className="button operation"
              onClick={(e) =>
                setOperation(new Division(e.target as HTMLElement))
              }
            >
              /
            </div>
            <div
              className="button number"
              onClick={() => setDigitOnScreen("7")}
            >
              7
            </div>
            <div
              className="button number"
              onClick={() => setDigitOnScreen("8")}
            >
              8
            </div>
            <div
              className="button number"
              onClick={() => setDigitOnScreen("9")}
            >
              9
            </div>
            <div
              className="button operation"
              onClick={(e) =>
                setOperation(new Multiplication(e.target as HTMLElement))
              }
            >
              X
            </div>
            <div
              className="button number"
              onClick={() => setDigitOnScreen("4")}
            >
              4
            </div>
            <div
              className="button number"
              onClick={() => setDigitOnScreen("5")}
            >
              5
            </div>
            <div
              className="button number"
              onClick={() => setDigitOnScreen("6")}
            >
              6
            </div>
            <div
              className="button operation"
              onClick={(e) =>
                setOperation(new Subtraction(e.target as HTMLElement))
              }
            >
              -
            </div>
            <div
              className="button number"
              onClick={() => setDigitOnScreen("1")}
            >
              1
            </div>
            <div
              className="button number"
              onClick={() => setDigitOnScreen("2")}
            >
              2
            </div>
            <div
              className="button number"
              onClick={() => setDigitOnScreen("3")}
            >
              3
            </div>
            <div
              className="button operation"
              onClick={(e) =>
                setOperation(new Addition(e.target as HTMLElement))
              }
            >
              +
            </div>
            <div
              className="button zero number"
              onClick={() => setDigitOnScreen("0")}
            >
              0
            </div>
            <div
              className="button number"
              onClick={() => setDigitOnScreen(",")}
            >
              ,
            </div>
            <div className="button operation" onClick={() => showResult()}>
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
