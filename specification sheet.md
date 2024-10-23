# Specifications sheet for Offanime.

## table of contents

| Content | Section |
| - | - |
| Everything related to the keyboard | Section 1 |
| > Shortcuts | Section 1-A |
| Why Offanime | Section 2 |
| > Reasons of creation | Section 2-A |
| > Why offanime and not others | Section 2-B |
| Pages informations, explanations | Section 3 |
| > The home page | Section 3-A |
| > The anime page | Section 3-B |
| > The settings page | Section 3-C |
| > The help page | Section 3-D |
| > The profile page | Section 3-E |
| > The profile view page | Section 3-F |
| > The licence page | Section 3-G |
| > The discovery page | Section 3-H |
| Ideas, furure implementations | Section 4 |
| Todo-list, advencement | Section 5 |
| Bugs | Section 6 |

---

## Section 1 - Everything related to the keyboard.

### A - Shortcuts list and description.

#### Every shortcuts here it can be change in the settings page. The letter located in the footnote ("text") is a button. if the user start typing and reach the most long shortcut words (9), so write the search of the user in the search bar.

1. debug: Open a frame with every logs listed. (log logs is off by default)
2. n: Goto the next video/episode.
3. p: Goto the previus video/episode.
4. "space": Pause the video. (idk if we can without an extension)
5. ilovethis: Give to the currently user an advencement.
6. "tab": Switch between different elements in the page like a button or search bar and make a border.
7. s: show the synopsis of the current anime if awaible.
8. r: rechsearch in the search bar.
9. d: show the downloader frame.
10. optimize (or opti): Make the website just for watching remove everything is unusefull to watch their anime.
11. f: Add the current anime to favorite playlist. (if the user does not delete this playlist)
12. w: Add the current anime to watched playlist. (if the user does not delete this playlist)
13. l: Add the current anime to watch-it-later playlist. (if the user does not delete this playlist)
14. i: open up a frame and give every information about current state of the anime to the name of anime in a frame and make this sharable.
15. fr (or en,uk,it,...): change the language of the current anime to the given lang-code language if awaible.
16. lama: open the llama3 ai and do anything you want.
17. ai: open a frame to select an ai model, for video, audio and text.
18. q: open the quote of the currently user only if awaible.
19. c: copy the name of the current anime
20. contact: show a frame with every information to contact us. (everyone of us? or The last of us)
21. v: vote for the currently opened anime page to be added soon.
22. a: change the page look to google.com and cut the video player if is on and make it MISS (see arch linux main page)
23. help: show a frame with differents helps category and give a link to the github wiki.
24. lobby (or hub,spawn): Goto the main page. (We don't play Minecraft)
25. hack: open a frame and explain why hacking is not a good thing. (and give a h@cker advancement)
26. random: open a rondom page of an anime.
27. awesome: print a rainbow with animation!

## Section 2 - Why offanime.

### A - Reasons of creation.

#### The main reason of the creation is because i want to challenge me to do this website with no skills, no idea.

#### They are also others reasons like:
- watch anime (offline)
- make it foss (free and open source software) and miss (make it stupidly simple)

### B - Why offanime and not others.

#### This is not question when offanime is going to be ready, you are going to chose us because:
- no traker, pop-up, no insistance (profile/extension/app/pwa), open source
- simple, fast, beautifull
- no more intro/outro !!!
- every languages of the world
- talk with AI !!!
- fully customizable
- can run on your own machine !
- download anime

## Section 3 - Pages informations, explanations.

### A - The home page.

#### Header or nav-bar

The header is located in the top of the page, it's rectangle with round borders. It will have 3 main component:

1. The indicator/navigator

it's going to show the path of where you are. For example if you are in the home, main page it will show "OFFANIME / Home". It's going to have an animation for each word, it will have a hover effect, the default color is white and when your curser will be on a word it's going to change the color of the word to gray. It will also have a fonction: when you click on a word it will copy. For example if your click on "OFFANIME" the text going to be copy is "https://offanime.com/" you can also click to an anime name "Sword art online" it will copy "https://offanime.com/sword-art-online/". But when the name of anime is too long, it will show the acronym for "Sword art online" it will be "SAO". The police used is "Arial".

2. The search bar

This is the ultimate component because with this search bar you will be able to do like everything. The principe of work of this component is:
1. search for anime (with acronyms, name, date)
2. search for settings
3. search for profiles
4. search for help
5. search for discovery (extension, apparence)
It's located at the center of the header and it will be rounded rectangle, with a text in it "search..." and an icon for search at the right of his rectangle. When a search going to be input, a new rounded rectangle going to show down with an animation and in the right of the proposed response you will have a "tag" with different colors of each topic example: red for anime, blue for profile, green for help, violet/purple for setting and orange for discovery. When your cursor is on this component, it will be in writting/editing mode.

3. Icons

There is 4 icons in order to make easier to go to the profile, help, categories, settings pages.
(in the future we may add the planning or new icon)

#### Banner



---

### add a heart break playlist
### an ai who detect the intro/outro and delete it.

## Todo:

faut postgre pour la database

- [ ] Frontend (React)
- [ ] Backend (Node.js/Express)
- [ ] Bibliothèque de streaming (HLS.js, Shaka Player, Video.js, etc.)
- [ ] Stockage des vidéos (AWS S3, Google Cloud Storage, etc.)

1. **Utiliser un framework web prêt à l'emploi** :
   - Des frameworks comme React, Angular ou Vue.js fournissent une structure de base pour construire rapidement une application web.
   - Ils vous aident à gérer le frontend de manière organisée et efficace.

2. **Utiliser un backend "serverless"** :
   - Des services comme AWS Lambda, Google Cloud Functions ou Azure Functions vous permettent de déployer du code backend sans avoir à gérer un serveur.
   - Cela simplifie grandement la mise en place du backend de votre application.

3. **Utiliser une plateforme de streaming vidéo clé en main** :
   - Des services comme Wowza, Brightcove ou Vimeo proposent des solutions de streaming vidéo complètes, avec des API et des SDK pour les intégrer facilement.
   - Cela vous évite de devoir développer toute la partie de gestion et de diffusion des vidéos.

4. **Utiliser un générateur de site web statique** :
   - Des outils comme Gatsby (basé sur React) ou Nuxt.js (basé sur Vue.js) vous permettent de générer des sites web statiques très performants.
   - Vous pouvez alors vous concentrer sur le développement du frontend et laisser le backend "serverless" gérer les aspects dynamiques.


1. Introduction
- Overview of the website
- Purpose of the document

2. User Interface
- Design and layout of the website
- Navigation and user experience
- Color scheme and branding

3. Content Management
- Uploading and categorizing videos
- Managing video library
- Content moderation guidelines

4. Video Playback
- Streaming quality
- Player controls
- Video resolution options

5. User Accounts
- Registration and login
- Profile management
- Account security measures

6. Search Functionality
- Search bar feature
- Filters and sorting options
- Advanced search capabilities

7. Recommendations and Related Videos
- Algorithm for suggesting videos
- Related videos section
- Personalized recommendations

8. Monetization
- Advertisements
- Subscription options
- Payment gateways integration

9. Mobile Responsiveness
- Compatibility with mobile devices
- Mobile app development
- Push notification feature

10. Security
- Data protection
- Payment security
- SSL encryption implementation

11. Legal Considerations
- Copyright issues
- Terms of service
- Privacy policy compliance

12. Future Enhancements
- Potential features to add
- Long-term development plans
- User feedback integration

###### Offanime by Zwaygo version alpha 0.1-0001 (23/10/2024)