export default class Operation {
  private htmlElement: HTMLElement;
  private toggled: boolean = false;
  private type: string;

  constructor(htmlElement: HTMLElement, type: string) {
    this.htmlElement = htmlElement;
    this.type = type;
  }

  calculate(a: number, b: number): number {
    return a;
  }

  setToggled(toggled: boolean):void {
    this.toggled = toggled;
  }

  getToggled(): boolean {
    return this.toggled;
  }

  getType(): string {
    return this.type;
  }

  toggle(): void {
    this.htmlElement.className = "button operation-clicked";
    this.setToggled(true);
  }

  untoggle(): void {
    this.htmlElement.className = "button operation";
    this.setToggled(false);
  }
}
