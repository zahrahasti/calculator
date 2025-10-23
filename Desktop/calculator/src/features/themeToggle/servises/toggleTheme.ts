import { effect, signal } from "alien-signals";

type IndexToThemeMap = {
  1: "dark";
  2: "light";
  3: "purple";
};
type IndexKeyThemeMap = keyof IndexToThemeMap;
type ThemeType = {
  [K in IndexKeyThemeMap]: {
    themeName: IndexToThemeMap[K];
    themeCssClass: string;
  };
};

class ChangeTheme {
  index = signal<IndexKeyThemeMap>(1);
  private _body = document.body;
  private _inputThemeEl = document.getElementById(
    "btn-theme",
  ) as HTMLInputElement;
  private _themes: ThemeType = {
    1: {
      themeName: "dark",
      themeCssClass: "theme-dark:bg-main-bg dark:bg-main-bg",
    },

    2: {
      themeName: "light",
      themeCssClass: "theme-purple:bg-main-bg purple:bg-main-bg",
    },
    3: {
      themeName: "purple",
      themeCssClass: "theme-light:bg-main-bg light:bg-main-bg",
    },
  };
  start(): void {
    this._setupThemeListener();
  }

  private _setupEffect(): void {
    effect(() => {
      const current = this.index();
      const { themeName } = this._themes[current];
      this._body.setAttribute("data-theme", themeName as string);
    });
  }
  private _isValidIndex(value: number): value is IndexKeyThemeMap {
    return value === 1 || value === 2 || value === 3;
  }

  private _setupThemeListener(): void {
    this._inputThemeEl.addEventListener("change", () => {
      const value = Number(this._inputThemeEl.value);
      const indexValue = this._isValidIndex(value) ? value : 1;
      this.index(indexValue);
      this._setupEffect();
    });
  }
}

export { ChangeTheme };
