import { evaluate } from "mathjs";

class CalculatorLogic {
  private _operators = ["+", "-", "*", "/"];

  evaluateExpression(expr: string): string {
    return String(evaluate(expr));
  }
  isOperator(value: string): boolean {
    return this._operators.includes(value);
  }
  sanitizeOutput(current: string, output: string): string {
    if (this.isOperator(output)) {
      if (!current) return "";
      const last = current.at(-1) ?? "";
      if (this.isOperator(last)) return current.slice(0, -1) + output;
    }

    return current + output;
  }
}

export { CalculatorLogic };
