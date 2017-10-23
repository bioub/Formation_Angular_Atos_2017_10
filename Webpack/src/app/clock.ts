interface ClockOptions {
  container: Element | null,
  delay?: number,
  format?: string,
}

class Clock {
  private container: Element;
  private delay: number;
  private format: string;

  constructor(options: ClockOptions) {
    if (!options.container) {
      throw new Error('container est obligatoire');
    }
    this.container = options.container;
    this.delay = options.delay || 1000;
    this.format = options.format || 'HH:mm:ss';
  }

  private update() {
    this.container.textContent = (new Date()).toLocaleTimeString();
  }

  public start() {
    this.update();
  }
}
