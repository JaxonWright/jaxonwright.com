<img src="https://www.jaxonwright.com/assets/img/branding/dark.png" width="100px"/>

[![Website status](https://img.shields.io/website-up-down-green-red/http/jaxonwright.com.svg?style=flat-square)](https://jaxonwright.com)
[![GitHub license](https://img.shields.io/github/license/JaxonWright/jaxonwright.com?style=flat-square)](https://github.com/JaxonWright/jaxonwright.com)

## About
This website is the personal site of me, Jaxon Wright. It is written with the Google-maintained Angular Framework. It is meant to showcase a little about me and what I have been working on. Feel free to reference any of this for your own project or even fork the repository.

## Libraries Used
This is not an exhaustive list, but it is the core of what is used.
- [Angular](https://github.com/angular/angular) : The backbone
- [Angular Material](https://github.com/angular/material2) : Provides a plethora of elements that follow Google's Material Design standard
- [Angular FontAwesome](https://fontawesome.com/) : A very powerful, fast and light way to handle icons.
- [Bootstrap 4](https://getbootstrap.com/) : Used for layout purposes exclusively. Maybe will scrap this for the new CSS-Grid at a later time.

## Testing, Building and Deploying
If you are starting fresh, make sure to run `npm install` to grab all of the dependencies

### Testing
To start up the local development server, simply run `ng serve`

### Building
This is a script defined in the package.json. You may want to change the base-href in that command to not be at the root domain path.

`npm run build`


### Deploying
Deployment is automatically ran by the Github Action within this repository. It will run on any push or pull request for the `master` branch.


### License
This project uses the MIT license, which basically means you can do whatever you want with it. All that I ask is that you don't use it to deploy a portfolio website pretending to be me...
