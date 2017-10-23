import format from 'date-fns/format';

interface ClockOptions {
  container: Element | null,
  delay?: number,
  format?: string,
}

export class Clock {
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
    this.container.textContent = format(new Date(), this.format);
  }

  public start() {
    this.update();
    setInterval(this.update.bind(this), this.delay);
  }
}
