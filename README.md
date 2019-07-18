<img src="https://www.jaxonwright.com/assets/img/branding/dark.png" width="100px"/>

## About
This website is the personal site of me, Jaxon Wright. It is written with the Google-maintained Angular Framework. It is meant to showcase a little about me and what I have been working on. Feel free to reference any of this for your own project or even fork the repository.

## Libraries Used
This is not an exhaustive list, but it is the core of what is used.
- [Angular 6](https://github.com/angular/angular) : The backbone
- [Angular Material](https://github.com/angular/material2) : Provides a plethora of elements that follow Google's Material Design standard
- [ngx-qrcode2](https://github.com/techiediaries/ngx-qrcode) : Used to generate QR codes for my crypto wallets on the Contact Page.
- [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) : Used to easily publish the built Angular project to the gh-pages branch of the repository for production. I have this installed globally, so it is not in the package.json, but I figured I would mention it.
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
This command will not work if you do not have an [environment variable](https://msdn.microsoft.com/en-us/library/windows/desktop/ms682653(v=vs.85).aspx) called GH_TOKEN defined for your OS. This was to prevent my [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) from being public. This is a script defined in the package.json which uses [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) to commit to the gh-pages branch of this repository. This needs to be modified to your preferences.

`npm run publish`

Also, make sure that you modify the `CNAME` file to have your website's URL in it and not mine. Hosting on GH Pages will not work otherwise.


