import type { CalcButtonProps } from "./types";

const BUTTON_CONFIG: CalcButtonProps[] = [
  { type: "digit", value: "7", id: "btn-keypad", label: "7" },
  { type: "digit", value: "8", id: "btn-keypad", label: "8" },
  { type: "digit", value: "9", id: "btn-keypad", label: "8" },
  {
    type: "action",
    value: "delete",
    id: "btn-action-delete",
    label: "DEL",
    class: "btn-control bg-key-bg! border-b-key-shadow! text-white!",
  },
  { type: "digit", value: "4", id: "btn-keypad", label: "4" },
  { type: "digit", value: "5", id: "btn-keypad", label: "5" },
  { type: "digit", value: "6", id: "btn-keypad", label: "6" },
  {
    type: "operator",
    value: "+",
    id: "btn-keypad",
    iconName: "iconamoon:sign-plus-fill",
  },
  { type: "digit", value: "1", id: "btn-keypad", label: "1" },
  { type: "digit", value: "2", id: "btn-keypad", label: "2" },
  { type: "digit", value: "3", id: "btn-keypad", label: "3" },
  {
    type: "operator",
    value: "-",
    id: "btn-keypad",
    iconName: "iconamoon:sign-minus",
  },
  { type: "digit", value: ".", id: "btn-keypad", label: "." },
  { type: "digit", value: "0", id: "btn-keypad", label: "0" },
  {
    type: "operator",
    value: "/",
    id: "btn-keypad",
    iconName: "iconamoon:sign-division",
  },
  {
    type: "operator",
    value: "*",
    id: "btn-keypad",
    iconName: "iconamoon:close",
  },

  {
    type: "action",
    value: "reset",
    id: "btn-action-reset",
    class: "btn-control col-span-2 bg-key-bg! border-b-key-shadow! text-white!",
    label: "RESET",
  },
  {
    type: "equal",
    value: "=",
    id: "btn-equal",
    label: "=",
    class:
      "btn-control col-span-2 bg-primary-key-bg! border-b-primary-key-shadow! text-equal-color!",
  },
];

export { BUTTON_CONFIG };
