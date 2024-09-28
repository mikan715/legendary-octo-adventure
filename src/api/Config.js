class Config {
  constructor() {
    this.apiBase = import.meta.env.VITE_API;
  }
}

export const config = Object.freeze(new Config());
