# React Recipe Box

A Free Code Camp assignment.

## Objective

**Objective**: Build a CodePen.io app that is functionally similar to [this](https://codepen.io/FreeCodeCamp/full/xVXWag/).

Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.

**User Story:** I can create recipes that have names and ingredients.

**User Story:** I can see an index view where the names of all the recipes are visible.

**User Story:** I can click into any of those recipes to view it.

**User Story:** I can edit these recipes.

**User Story:** I can delete these recipes.

**User** Story: All new recipes I add are saved in my browser's local storage. If I refresh the page, these recipes will still be there.

Hint: You should prefix your local storage keys on CodePen, i.e. _username_recipes

## Completed App

[Github Pages app](https://timhandy.github.io/recipe-box/)

## Notable learning/features

- local storage functions

- used ES6 spread operator in deleteRecipe function to copy state.

- use Symbol(thinghere) to generate unique indexes for use in keys. Symbols by their nature are guaranteed to be unique. I used the map index which caused issues with the React-Bootstrap styling. When I deleted a recipe Panel it would open up the next panel rather than just showing the list of closed panels. Adding the value returned from Symbol fixed it: eventKey={Symbol(recipe)} 

- Think more about the layout of the app before diving in; split out components into subcomponents more. Plan a layout on paper. - React docs have a good section on this: 
    1. start with a mockup on paper
    1. break into a heirarchy of components
    1. build a static version without state
    1. list out minimal bits of state that will be required
    1. identify the components that should own the state, eg. a close parent element common to the components that require access to the state 
    1. implement the state and downwards flow of state as props
    1. add inverse upwards state, to enalbe forms to submit data to state

- Making a test data reset button saves a lot of time!

- React-Bootstrap adds complexity.

- Created a git branch to test a rebuild for troubleshooting.

- Used a ternary to selectively render some text dependent on a state value.

- I should have created a Recipe component also. I tried this in another branch and it worked much better, cleaner. I could refactor to use this maybe.

## Notes for next time

- When using Boostrap modals and such, split into their own components rather than squishing into a render function! This was bad, and meant that i had to duplicate code. I could have split out the modal into its own component and then reused it.

- Move App into src. Make a main.js file to launch the app.

- Remembered something... I think all logic functions (wherever they are, in react file or module file) should be pure functions. They should receive some part of state as an arg and return that state updated. Then in the react component, the functions get called and state passed in, then the return value is reassigned back to state by the function in the component. Wonder if this is where I've been struggling. The byproduct of this is that it then also makes testing far easier!


## Dev

See package.json for run commands.