import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeIsLight : boolean = true;

  constructor() { }

  set(theme) {
    if (theme == 'light-theme') this.themeIsLight = true;
    else this.themeIsLight = false;
    localStorage.setItem('theme', theme)
  }

  getSaved() : string {
    var theme = localStorage.getItem('theme');
    if (theme == 'dark-theme' || 
        theme == 'light-theme')
      return theme;
    else localStorage.removeItem('theme');
    return 'light-theme';
  }

  isLight() : boolean {
    return this.themeIsLight;
  }

  isDark() : boolean {
    return !this.isLight();
  }
}
