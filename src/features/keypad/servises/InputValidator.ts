import { CalculatorState } from "@features/Display/servises/calculatorState";
import { CalculatorLogic } from "@features/calulatorCore/servises/calculatorLogic";

const keyPads = document.querySelectorAll("#btn-keypad");
const form = document.getElementById("keypad-layout") ?? null;
const outputDisplay = document.getElementById("output") ?? null;
const btnResetOutput = document.getElementById("btn-action-reset") ?? null;
const btnCalc = document.getElementById("btn-equal") ?? null;
const btnDeleLastNum = document.getElementById("btn-action-delete") ?? null;
const errorShow = document.getElementById("error") ?? null;

class InputValidator {
  constructor(
    private _state = new CalculatorState(),
    private _logic = new CalculatorLogic(),
  ) {}

  init(): void {
    if (
      !form ||
      !outputDisplay ||
      !btnResetOutput ||
      !btnCalc ||
      !btnDeleLastNum ||
      !errorShow
    ) {
      return;
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    keyPads.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!(btn instanceof HTMLElement)) return;
        const val = btn.dataset.value;
        if (!val) return;

        const current = this._state.get();
        this._state.set(this._logic.sanitizeOutput(current, val));
      });
    });

    btnCalc.addEventListener("click", () => {
      if (this._state.get()) {
        const result = this._logic.evaluateExpression(this._state.get());
        this._state.set(result);
      }
    });

    btnResetOutput.addEventListener("click", () => {
      this._state.set("");
    });
    btnDeleLastNum.addEventListener("click", () => {
      const current = this._state.get();
      this._state.set(current.slice(0, -1));
    });

    this._state.onChange((value) => {
      let timer: null | NodeJS.Timeout = null;
      if (value === String(Infinity)) {
        outputDisplay.textContent = "";
        errorShow.textContent = "Invalid format";
        this._state.clear();

        throw new Error("Invalid format");
      } else {
        outputDisplay.textContent = value;
        errorShow.textContent = "";
        errorShow.classList.add("fade");
        timer = setTimeout(() => {
          errorShow.classList.remove("fade");

          if (timer !== null) {
            clearTimeout(timer);
            timer = null;
          }
        }, 5000);
      }
    });
  }
}

export { InputValidator };
