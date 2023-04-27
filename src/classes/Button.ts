export default class Button {
  private htmlElement: HTMLElement;
  private toggled: boolean = false;

  constructor(htmlElement: HTMLElement) {
    this.htmlElement = htmlElement;
  }

  setToggled(toggled: boolean): void {
    this.toggled = toggled;
  }

  getToggled(): boolean {
    return this.toggled;
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
