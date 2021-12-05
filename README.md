# Whisper's World

Whisper's World is a simple, pick-up and play card matching game that is aimed at Children aged 5-10 years old. The game is built primarily in Javascript with minimal HTML and CSS styling to keep the focus on the game itself. The game has been tested throughout development to ensure functionality and appropriacy for it's intended audience. The game aims to provide an interactive tool to teach children how to use a mouse or a touch-screen in a fun and challenging way.

![Responsive Mock-up](https://github.com/StevieMigan/whispersworld/blob/main/assets/images/game-responsive.png?raw=true)

## Features 

The project includes a variety of features: 

## The Landing Page

![Landing Page](https://github.com/StevieMigan/whispersworld/blob/main/assets/images/instructions.png?raw=true)

![Landing Image](https://github.com/StevieMigan/whispersworld/blob/main/assets/images/whisper-link.png?raw=true)

    The project features a simple landing page that explains the rules of the game to the user and allows them to click to start when they're ready to begin. Audio onclick features that play a cat meowing sound has been added to the start button as an extra interative touch.

## The Game Page

![Game Page](https://github.com/StevieMigan/whispersworld/blob/main/assets/images/game-board.png?raw=true)

On the game page itself, a timer has been implemented to create an element of challenge for the player. This has been set at 2 minutes intentionally after play-testing was completed by user's within the target demographic (Age 5-10) and this was felt to be most fair for all. There is also a score meter to inform the player how many matches they have made and a reset button underneath the game board to allow the user to restart the game at any point.

![Score Board](https://github.com/StevieMigan/whispersworld/blob/main/assets/images/score-board.png?raw=true)

![Reset Button](https://github.com/StevieMigan/whispersworld/blob/main/assets/images/reset-button.png?raw=true)

In addition to this, Looping audio has also been added to the game page, but the audio bar has been left in to allow the user to switch this off/on depending on their personal preference.

![Audio Bar](https://github.com/StevieMigan/whispersworld/blob/main/assets/images/audio-bar.png?raw=true)

The functionality of the game shuffles the cards on the grid each time the game is restarted, cards will be removed from the grid when matched with their matching counterpart and an alert message is in place to congratulate the player upon winning the game. This then invokes a function to restart the game.

### Features Left to Implement

- Difficulty levels - Easy, Medium and Hard - Each of these will adapt the amount of time the player is given to complete the game, thus adjusting the level of challenge.
- Add alternative audio tracks that can be chosen by the user upon starting the game

## Testing 

A number of testing methods have been used throughout the creation of Thanet Gaming Club. The navigation elements, both internal and external have been checked to ensure they lead to the right page and that all external links open in a new tab.

The Lighthouse feature of Chrome Dev tools has been used to ensure a consistently high score in all 4 areas of testing:

*Performance
*Accessibility
*Best Practices
*SEO

![Lighthouse](https://github.com/StevieMigan/whispersworld/blob/main/assets/images/index-lighthouse.png?raw=true)

Site colours and features have been chosen to compliment one another and text color has been chosen to contrast against backgrounds to maximise UX and accessibility. The Site has been tested on a range of Devices and on 3 different browsers to ensure a consistent performance.

-Chrome
-Firefox
-Edge

The relevant media queries have been implemented to ensure a smooth UX site-wide for all screen sizes. This has been tested using Chrome developer tools and finalised using - http://ami.responsivedesign.is/#

Alt images have been added in the script.js file using the setAttribute method to ensure accessibility was kept at 100, site-wide.

## Bugs

A number of bugs were found during the construction of the project.

- Fixed a bug in the script.js file that was causing an issue wherein the card array would not randomise correctly. 

- Fixed a bug with the audio files not loading correctly - this turned out to be an issue with file paths not being entered correctly.

- Fixed a bug in the script.js that was causing issues with the game grid loading correctly.

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://github.com/StevieMigan/whispersworld/blob/b0db87ac598f28d83cfe56f4064b510ac2d82a6f/assets/images/html-check.png)

- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://github.com/StevieMigan/whispersworld/blob/b0db87ac598f28d83cfe56f4064b510ac2d82a6f/assets/images/css-check.png)
  
   - JavaScript - No errors were found when passing through [JS Hint](https://github.com/StevieMigan/whispersworld/blob/b0db87ac598f28d83cfe56f4064b510ac2d82a6f/assets/images/js-check.png)

### Unfixed Bugs

None to report.

## Deployment

This site has been deployed to GitHub pages - Deployment steps are as follows:

- From the Github repository, navigate to the settings tab
- From the source section drop-down menu, select the "Master" branch
- Once this has been selected, the page will refresh with a ribbon display to indicate that the site has been deployed successfully.

The Live link can be found here - https://steviemigan.github.io/whispersworld/


## Credits 

### Content 

- All card images, Whisper the witch image, favicon and audio files have been credited below in the media section - 
- Fonts - "Rock Salt" has been sourced from https://fonts.google.com/
- Code for the timer element of the game has been sourced and adapted from - https://www.geeksforgeeks.org/javascript-timer/

### Media

freefavicon.com - Witches hat Favicon

http://jacobl14.files.wordpress.com/2011/05/shroom2large.png - Mushroom Image

http://u.cubeupload.com/Raytaygirl/piq371517400x400.png - Clover Image

https://tse3.mm.bing.net/th?id=OIP.OybhKxnTl00-dtOQyS2zkgAAAA&pid=Api - Dragon Egg Image

https://i.pinimg.com/originals/ed/21/47/ed21479782a8ba260925e42540ebcc45.png - Rose Image

http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/ee2ae7fa5a7f735.png - Rainbow Star Image

https://tse4.mm.bing.net/th?id=OIP.qXdN1uXFifcOVYKDH3SeuQHaGr&pid=Api - Moon Image

https://lh3.googleusercontent.com/proxy/Zfp8xQ7Av9Ykzq0Ng3PVFne512SG_yr_VEkbyB5GWoxOXz_58fSqCtW35lfte6mEbxHdZz8vzGbwLYqmf4TSU5qNDEs=s0-d - Lightning Image

https://forums.terraria.org/index.php?attachments/lesser_healing_potion-png.175737/ - Magic Potion Image

http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/7414f939ab6fc5e.png - Cat Image

https://pixabay.com/illustrations/halloween-cat-witch-hat-icon-5586567/ - Whisper the weather witch Image

Music by <a href="/users/nojisuma-23737290/?tab=audio&amp;utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=audio&amp;utm_content=9689">nojisuma</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=9689">Pixabay</a>

cat-meow.wav - www.zapsplat.com 
