import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

export enum ThemeType {
  Light = 'light-theme',
  Dark  = 'dark-theme',
  Black = 'black-theme'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeType : ThemeType;

  constructor(public meta : Meta) { }

  set(theme) {
    if (theme == ThemeType.Light) {
      this.themeType = theme;
      this.meta.updateTag({name: 'theme-color', content: "#f5f5f5"});
    } else if (theme == ThemeType.Dark) {
      this.themeType = theme;
      this.meta.updateTag({name: 'theme-color', content: "#262626"});
    } else if (theme == ThemeType.Black) {
      this.themeType = theme;
      this.meta.updateTag({name: 'theme-color', content: "#000000"});
    }
    localStorage.setItem('theme', theme);
  }

  getSaved() : string {
    var theme = localStorage.getItem('theme');
    if (theme == ThemeType.Light ||
        theme == ThemeType.Dark ||
        theme == ThemeType.Black)
      return theme;
    else localStorage.removeItem('theme');
    return ThemeType.Light;
  }

  isLight() : boolean {
    return this.themeType == ThemeType.Light;
  }

  isDark() : boolean {
    return this.themeType == ThemeType.Dark || this.themeType == ThemeType.Black;
  }
}
