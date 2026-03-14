export type ClickSparkOptions = {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  easing?: 'linear' | 'ease-in' | 'ease-in-out' | 'ease-out';
  extraScale?: number;
};

type Spark = {
  x: number;
  y: number;
  angle: number;
  startTime: number;
};

export class ClickSpark {
  private element: HTMLElement;
  private options: Required<ClickSparkOptions>;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private wrapper: HTMLDivElement;
  private sparks: Spark[] = [];
  private animationId: number | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private resizeTimeout: number | null = null;

  constructor(element: HTMLElement, options: ClickSparkOptions = {}) {
    this.element = element;
    this.options = {
      sparkColor: options.sparkColor ?? '#fff',
      sparkSize: options.sparkSize ?? 10,
      sparkRadius: options.sparkRadius ?? 15,
      sparkCount: options.sparkCount ?? 8,
      duration: options.duration ?? 400,
      easing: options.easing ?? 'ease-out',
      extraScale: options.extraScale ?? 1.0
    };

    this.wrapper = document.createElement('div');
    this.wrapper.style.cssText = 'position: relative; width: 100%; height: 100%;';

    this.canvas = document.createElement('canvas');
    this.canvas.style.cssText = [
      'width: 100%',
      'height: 100%',
      'display: block',
      'user-select: none',
      'position: absolute',
      'top: 0',
      'left: 0',
      'pointer-events: none'
    ].join(';');

    const context = this.canvas.getContext('2d');
    if (!context) {
      throw new Error('Canvas 2D context is unavailable for ClickSpark');
    }

    this.ctx = context;
    this.handleClick = this.handleClick.bind(this);
    this.draw = this.draw.bind(this);
    this.init();
  }

  private init() {
    while (this.element.firstChild) {
      this.wrapper.appendChild(this.element.firstChild);
    }

    this.wrapper.appendChild(this.canvas);
    this.element.appendChild(this.wrapper);

    this.setupResizeObserver();
    this.resizeCanvas();
    this.element.addEventListener('click', this.handleClick);
    this.startAnimation();
  }

  private setupResizeObserver() {
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        if (this.resizeTimeout) {
          window.clearTimeout(this.resizeTimeout);
        }
        this.resizeTimeout = window.setTimeout(() => this.resizeCanvas(), 100);
      });
      this.resizeObserver.observe(this.element);
      return;
    }

    const fallbackResize = () => {
      if (this.resizeTimeout) {
        window.clearTimeout(this.resizeTimeout);
      }
      this.resizeTimeout = window.setTimeout(() => this.resizeCanvas(), 100);
    };

    window.addEventListener('resize', fallbackResize);
  }

  private resizeCanvas() {
    const rect = this.element.getBoundingClientRect();
    if (this.canvas.width !== rect.width || this.canvas.height !== rect.height) {
      this.canvas.width = rect.width;
      this.canvas.height = rect.height;
    }
  }

  private easeFunc(t: number) {
    switch (this.options.easing) {
      case 'linear':
        return t;
      case 'ease-in':
        return t * t;
      case 'ease-in-out':
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      case 'ease-out':
      default:
        return t * (2 - t);
    }
  }

  private handleClick(e: MouseEvent) {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const now = performance.now();
    const newSparks: Spark[] = Array.from({ length: this.options.sparkCount }, (_, i) => ({
      x,
      y,
      angle: (2 * Math.PI * i) / this.options.sparkCount,
      startTime: now
    }));

    this.sparks.push(...newSparks);
  }

  private draw(timestamp: number) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.sparks = this.sparks.filter((spark) => {
      const elapsed = timestamp - spark.startTime;
      if (elapsed >= this.options.duration) {
        return false;
      }

      const progress = elapsed / this.options.duration;
      const eased = this.easeFunc(progress);

      const distance = eased * this.options.sparkRadius * this.options.extraScale;
      const lineLength = this.options.sparkSize * (1 - eased);

      const x1 = spark.x + distance * Math.cos(spark.angle);
      const y1 = spark.y + distance * Math.sin(spark.angle);
      const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
      const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

      this.ctx.strokeStyle = this.options.sparkColor;
      this.ctx.lineWidth = 2;
      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.stroke();

      return true;
    });

    this.animationId = requestAnimationFrame(this.draw);
  }

  private startAnimation() {
    this.animationId = requestAnimationFrame(this.draw);
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }

    this.element.removeEventListener('click', this.handleClick);

    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }

    if (this.resizeTimeout) {
      window.clearTimeout(this.resizeTimeout);
      this.resizeTimeout = null;
    }

    if (this.wrapper.parentNode) {
      while (this.wrapper.firstChild) {
        if (this.wrapper.firstChild !== this.canvas) {
          this.element.appendChild(this.wrapper.firstChild);
        } else {
          this.wrapper.removeChild(this.canvas);
        }
      }
      this.element.removeChild(this.wrapper);
    }
  }
}
