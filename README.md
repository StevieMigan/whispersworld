# Whisper's World

Whisper's World is a simple, pick-up and play card matching game that is aimed at Children aged 5-10 years old. The game is built primarily in Javascript with minimal HTML and CSS styling to keep the focus on the game itself. The project features a variety of features, including a landing page that explains the rules of the game to the user and allows them to click to start when they're ready to begin. Audio onclick features have been added to the start button as an extra touch.

On the game page itself, a timer has been implemented to create an element of challenge for the player. This has been set at 2 minutes intentionally after play-testing was completed by user's within the target demographic (Age 5-10) and this was felt to be most fair for all. There is also a score meter to inform the player how many matches they have made and a reset button underneath the game board to allow the user to restart the game at any point.

In addition to this, Looping audio has also been added to the game page, but the audio bar has been left in to allow the user to switch this off/on depending on their personal preference.

The functionality of the game shuffles the cards on the grid each time the game is restarted, cards will be removed from the grid when matched with their matching counterpart and an alert message is in place to congratulate the player upon winning the game. This then invokes a function to restart the game.



![Responsive Mock-up](https://github.com/StevieMigan/thanet-gaming-club/blob/main/assets/images/responsive.png?raw=true)



## Features 

- __Navigation Bar__

  The Navigation bar appears on all three pages and features links to the "Home", "games" and "join us" sections. The Navbar has been styled with a color changing hover feature to highlight to the user which section they will be navigating to next.

  Featuring the Navigation bar on all three pages negates the need for the user to use the back button when navigating the site.

![Nav Bar](https://github.com/StevieMigan/thanet-gaming-club/blob/main/assets/images/navbar.png?raw=true)

- __The landing page image__

  The Landing features a bright and colourful feature image that captures the attention of the user immediately, coupled with a short, snappy overview of the purpose of the website and the club that it serves to advertise.

![Landing Page](https://github.com/StevieMigan/thanet-gaming-club/blob/main/assets/images/landing-image.png?raw=true)

- __What do we play? section__

 -The "What do we play?" section provides further details to the user of the kinds of activities that take place at the club as well as the range of hardware available to play.

  -The section is complimented by another eye-catching image, along with individual logos for the aforementioned games consoles that are available to play at the club.

![What do we play?](https://github.com/StevieMigan/thanet-gaming-club/blob/main/assets/images/what-do-we-play.png?raw=true)

- __When and where to find us? section__

  - This section serves to inform the user of the weekly meetup day and times for the group, as well as featuring the full address in an easy to read format. 

  - This section also includes a Google maps link that shows the user precisely where they can find the group.

![When and where to find us?](https://github.com/StevieMigan/thanet-gaming-club/blob/main/assets/images/where-to-find-us.png?raw=true)

- __The Footer__ 

  - The footer section provides the user with alternative ways to link in with and follow the group on their various social media pages - these include: Facebook, Twitter and Instagram.

![Footer](https://github.com/StevieMigan/thanet-gaming-club/blob/main/assets/images/footer.png?raw=true)

- __Games__

  - The games section provides an overview of some of the games available to play at the club. This serves to inform the user of what they can access whilst also offering some relatability as they should hopefully recognise one or two of the games.
  -Games have been selected based on a mixture of current popularity along with some retro classics thrown in to appeal to older audiences. 

![Games](https://github.com/StevieMigan/thanet-gaming-club/blob/main/assets/images/games-library.png?raw=true)

- __Join Us section__

  - This page allows a simple means of registering your interest in the club. It encourages users to leave their name and email address to allow a member of the team to send a follow-up email inviting them along to the club meet and/or to answer any further questions.

![Join us](https://github.com/StevieMigan/thanet-gaming-club/blob/main/assets/images/join.png?raw=true)

### Features Left to Implement

- Embed a Youtube video onto the homepage that showcases the group and what goes on there.
- Add Testimonials and feedback from people who already attend the group.

## Testing 

A number of testing methods have been used throughout the creation of Thanet Gaming Club. The navigation elements, both internal and external have been checked to ensure they lead to the right page and that all external links open in a new tab.

The Lighthouse feature of Chrome Dev tools has been used to ensure a consistently high score in all 4 areas of testing:

*Performance
*Accessibility
*Best Practices
*SEO

![Lighthouse](https://github.com/StevieMigan/thanet-gaming-club/blob/main/assets/images/lighthouse-score.png?raw=true)

Site colours and features have been chosen to compliment one another and text color has been chosen to contrast against backgrounds to maximise UX and accessibility. The Site has been tested on a range of Devices and on 3 different browsers to ensure a consistent performance.

-Chrome
-Firefox
-Edge

The relevant media queries have been implemented to ensure a smooth UX site-wide for all screen sizes. This has been tested using Chrome developer tools and finalised using - http://ami.responsivedesign.is/#

A few minor alterations were made for these media queries - The Hero-image does not appear on mobile devices, focusing instead on relaying information and using the high-score image as a background to provide an eye catching landing page. The background colours for the individual sections have also been removed to just be black on smaller screens, again to minimise overwhelming the user with too many colors and features.

## Bugs

A number of bugs were found during the construction of the project, both in the HTML and CSS files.

- Fixed bugs in file paths that were causing certain images not to load. I removed "/" before assets to fix this problem sitewide.

- Fixed potential issue in the footer social media links relating to security - as flagged by Lighthouse checks - Added rel="noreferrer" to fix this.

- Fixed a bug causing long load times on index.html and games.html by converting images from JPG and PNG format to webp, before compressing images to ensure the minimum file size.

- Fixed a bug in CSS code that was causing console pictures to be sized incorrectly and stretch outside their individual borders. Rectified this by adding "object-fit: cover;" and correcting the Width and Height elements.

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator] (https://github.com/StevieMigan/thanet-gaming-club/blob/main/assets/images/w3-html-check.png?raw=true)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://github.com/StevieMigan/thanet-gaming-club/blob/main/assets/images/jigsaw-css-check.png?raw=true)

### Unfixed Bugs

None to report.

## Deployment

This site has been deployed to GitHub pages - Deployment steps are as follows:

- From the Github repository, navigate to the settings tab
- From the source section drop-down menu, select the "Master" branch
- Once this has been selected, the page will refresh with a ribbon display to indicate that the site has been deployed successfully.

The Live link can be found here - https://steviemigan.github.io/thanet-gaming-club/


## Credits 

### Content 

- Hero-image.webp and snes-contoller.webp have been sourced from https://www.pexels.com/
- The icons in the footer, as well as the Control pad icon used in the site logo were taken from https://fontawesome.com/
- Fonts - Roboto & Autowide have been sourced from https://fonts.google.com/
- Code for the Sign-up form was adapted from the CI "Love Running" walkthrough project. The Form destination still links to CI but the rest has been changed to fit with the site purpose and style.

### Media




Credits - 

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

Music by <a href="/users/nojisuma-23737290/?tab=audio&amp;utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=audio&amp;utm_content=9689">nojisuma</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=9689">Pixabay</a>
