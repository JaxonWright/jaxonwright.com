import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// Solid Icons (fas)
import {
    faCar,
    faDesktop,
    faMobileAlt,
    faClipboard,
    faTimes,
    faPaintBrush,
    faCircle,
    faExclamationTriangle,
    faBalanceScale,
    faNewspaper,
    faCode,
    faDatabase,
    faCodeBranch,
    faMousePointer,
    faDollarSign,
    faHashtag,
    faBold,
    faCalendar,
    faEnvelope,
    faFileContract
} from '@fortawesome/free-solid-svg-icons';

// Brand Icons (fab)
import {
    faJava,
    faPython,
    faHtml5,
    faCss3Alt,
    faJsSquare,
    faJs,
    faAngular,
    faEmber,
    faAndroid,
    faWindows,
    faApple,
    faGithub,
    faLinkedin,
    faReddit,
    faFacebookMessenger,
    faXTwitter,
    faInstagram,
    faMediumM,
    faPaypal,
    faBitcoin,
    faBtc,
    faEthereum,
    faFontAwesome,
    faSpotify,
    faLastfm,
    faRust,
    faLinux,
    faStackOverflow,
    faGitlab
} from '@fortawesome/free-brands-svg-icons';

/**
 * This is a module to import individual font awesome icons.
 * Importing icons individually instead of entire packages will
 * make this build around 1 MB smaller!
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class IconsModule {

  constructor(library: FaIconLibrary) {
    library.addIcons(
      // fas
      faCar,
      faDesktop,
      faMobileAlt,
      faClipboard,
      faTimes,
      faPaintBrush,
      faCircle,
      faExclamationTriangle,
      faBalanceScale,
      faNewspaper,
      faCode,
      faDatabase,
      faCodeBranch,
      faMousePointer,
      faDollarSign,
      faHashtag,
      faBold,
      faCalendar,
      faEnvelope,
      faFileContract,
      // fab
      faJava,
      faPython,
      faHtml5,
      faCss3Alt,
      faJsSquare,
      faJs,
      faAngular,
      faEmber,
      faAndroid,
      faWindows,
      faApple,
      faGithub,
      faLinkedin,
      faReddit,
      faFacebookMessenger,
      faXTwitter,
      faInstagram,
      faMediumM,
      faPaypal,
      faBitcoin,
      faBtc,
      faEthereum,
      faFontAwesome,
      faSpotify,
      faLastfm,
      faRust,
      faLinux,
      faStackOverflow,
      faGitlab
    );
  }

}