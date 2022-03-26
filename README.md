# React Wump

It's time for me to pretend that I'm a front end dev and to learn some React. Insprired by a tic-tac-toe tutorial, I decided to expand the board concept and eventually evolved into this new version of Hunt the Wumpus.

## Premise

A Wumpus trapper enters an enormous, pitch back cave, knowing somewhere inside is the elusive prize that they must catch. The trapper totally forgot to bring a flashlight though, so has to resort on their innate abilities. Standing still in the dark they can smell the Wumpus' distinct aroma. Being as experienced as they are, they can estimate about how far away they are based on the potency, but can't really get a sense of direction towards the origin without moving. 

In order to locate the Wumpus, the trapper takes uses their nose to get a feeling for how far away their quarry is, then they move as far as they want within the cave. They then stop and take another nasal survey. This sequence repeats until the get close enough to the Wumpus to get a hold of it.

Since the cave is dark and vast, it's very easy to get disoriented The trapper can only keep tabs on their last couple of scent readings.

The Wumpus meanwhile, prefers not to be trapped. With it's sensitive ears, it knows that it's not alone in the cave. Every time the trapper moves, the Wumpus hears the steps and reacts by changing location if it feels like it. The longer the trapper walks, the further the Wumpus can move during that time frame. If the trapper takes only a few small steps, the Wumpus will stay put, not being able to get a good read on whether it's safe to make a move. 

## Game Play

The game starts with a grid of squares, one of which contains the hidden Wumpus. The player has to locate the Wumpus by clicking on squares and using the information provided to narrow in on the creature. The goal is to find it with the least number of guesses.

To make things more fun, the Wumpus will randomly move. For each guess after the player's initial entry into the realm, the Wumpus can move up to hald as far. If the player only moves a single square, the Wumpus will stay put. Thus the player has to weigh the gains from being able to travel further in a given turn with the downside of losing tabs on the target location. 

On each click of a square, the square turns from black to a color on the gradient scale of green (very close) to yellow (far away). Previous guesses will fade to black over time.

## Credit

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The rest of this comes from the vanilla bootstrap info.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
