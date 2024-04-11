import { Injectable, signal } from '@angular/core';
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
  themeType = signal<ThemeType>(ThemeType.Black);

  constructor(public meta: Meta) { }

  set(theme: ThemeType) {
    if (theme == ThemeType.Light) {
      this.themeType.set(theme);
      this.meta.updateTag({name: 'theme-color', content: "#f5f5f5"});
    } else if (theme == ThemeType.Dark) {
      this.themeType.set(theme);
      this.meta.updateTag({name: 'theme-color', content: "#262626"});
    } else if (theme == ThemeType.Black) {
      this.themeType.set(theme);
      this.meta.updateTag({name: 'theme-color', content: "#000000"});
    }
    localStorage.setItem('theme', theme);
  }

  getSaved(): string {
    let theme = localStorage.getItem('theme');
    if (theme == ThemeType.Light ||
        theme == ThemeType.Dark ||
        theme == ThemeType.Black)
      return theme;
    else localStorage.removeItem('theme');
    return ThemeType.Black;
  }

}
