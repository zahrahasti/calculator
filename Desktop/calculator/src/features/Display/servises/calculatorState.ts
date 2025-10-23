import { effect, signal } from "alien-signals";

class CalculatorState {
  private _output = signal("");

  clear(): void {
    this._output("");
  }

  get(): string {
    return this._output();
  }
  onChange(callback: (value: string) => void): void {
    effect(() => {
      callback(this._output());
    });
  }
  set(value: string): void {
    if (value.length <= 20) this._output(value);
  }
}

export { CalculatorState };
