import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeIsLight : boolean = true;

  constructor(public meta : Meta) { }

  set(theme) {
    if (theme == 'light-theme') {
      this.themeIsLight = true;
      this.meta.updateTag({name: 'theme-color', content: "#f5f5f5"});
    } else {
      this.themeIsLight = false;
      this.meta.updateTag({name: 'theme-color', content: "#262626"});
    } 
    localStorage.setItem('theme', theme);
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
