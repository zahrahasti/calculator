type DigitValue =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | ".";

type OperatorValue = "+" | "-" | "*" | "/";
type ActionValue = "reset" | "delete";
type EqualValue = "=";

type BaseProps = {
  class?: string;
  onClick?(value: string): void;
};

type DigitButton = BaseProps & {
  type: "digit";
  value: DigitValue;
  id: "btn-keypad";
  label: DigitValue;
};
type OperatorButton = BaseProps & {
  type: "operator";
  value: OperatorValue;
  id: "btn-keypad";
  iconName: string;
};

type ActionButton = BaseProps & {
  type: "action";
  value: ActionValue;
  id: `btn-action-${ActionValue}`;
  label: "DEL" | "RESET";
};

type EqualButton = BaseProps & {
  type: "equal";
  value: EqualValue;
  id: "btn-equal";
  label: string;
};

type CalcButtonProps =
  | DigitButton
  | EqualButton
  | ActionButton
  | OperatorButton;

export type { CalcButtonProps };
