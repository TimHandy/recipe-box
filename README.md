# React Camper Leaderboard

A Free Code Camp assignment.

## Objective

Build a CodePen.io app that is functionally similar to [this](https://codepen.io/FreeCodeCamp/full/eZGMjp/).

Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.

**User Story**: I can see a table of the Free Code Camp campers who've earned the most brownie points in the past 30 days.

**User Story**: I can see how many brownie points they've earned in the past 30 days, and how many they've earned total.

**User Story**: I can toggle between sorting the list by how many brownie points they've earned in the past 30 days and by how many brownie points they've earned total.

Hint: To get the top 100 campers for the last 30 days: https://fcctop100.herokuapp.com/api/fccusers/top/recent.

Hint: To get the top 100 campers of all time: https://fcctop100.herokuapp.com/api/fccusers/top/alltime.


## Completed App

[Github Pages app](https://)


## Notable learning/features

The HTML formatted markup updates instantly without a full page refresh upon changing the text. 

I used an NPM module called Marked. This can be utilised via CDN and link tag in the html or installed via NPM. I used the CDN version here.

Used React for the first time.

Props and State utilised

app.js stores the state for the whole app

Use of React's onChange and creating a handleChange function to update the state.

Passing a reference to handleChange down to a child component so that it can update the state

Another child component gets the updated state handed back down to it via props.

Stateless Functional Components can have a shorter syntax style.

Sass used. Media query for small screens

Deployed to the /docs dir to allow deployment to Github Pages


## Notes for next time

Changed to use webpack-dev-server
make index.html stored in in app dir, not the src dir. The html file should be dynamically generated on running webpack.

Use webpack-dev-server... creating webpack files every time is too slow


## Dev

See package.json for run commands.