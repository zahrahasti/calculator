export function changeTheme(e) {
    document.body.classList.remove("style-1", "style-2", "style-3");
    if (e.target.value === this.min)
      document.body.classList.add("style-1", "anim-opacity");
    if (+e.target.value === +this.min + +this.step)
      document.body.classList.add("style-2", "anim-opacity");
    if (e.target.value === this.max)
      document.body.classList.add("style-3", "anim-opacity");
  }