# Sprint Challenge: React - Star Wars

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored ReactJS, Function Components, component state and side effects. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web and style that data nicely on the page.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency with ReactJS Fundamentals and your command of the concepts and techniques in the Functional Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your Team Lead.

## Description

In this challenge, create a web page that presents a styled list of Star Wars characters. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your Team Lead.

- [ ] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

ReactJS is a javascript library introduced by facebook in order to make much faster reactive applications in the browser. It solves a lot of the issues with DOM manipulation, especially with regards to the performance of the DOM and state management. It also makes component creation much more intuitive via the JSX framework, which marries HTML and JS, and is a clear improvement to component creation in vanilla JS.

- [ ] What does it mean to _think_ in react?

It could mean a lot. To me, it means two things primarily, JSX and mass componentization. JSX is the intuitive and easy to read marriage of html and js, allowing you to structure components as if it were html through the use of element tags and nesting. Componentization is the act of seperating each component from others in their own files. Doing this makes reading and understanding all of the moving parts easier because you no longer have to go through a huge js file to find the relevant code, instead you can find the component you need to analyze by basically looking at file names. 

- [ ] Describe state.

State is the data the application stores in memory. To make any meaningful application, it will have to manage state. This could be as simple as an on off switch expressed as a boolean, or how many likes a post on social media has received. It could also be much more complex, such as an accounting application or even a game with characters’ and world state all being managed to make a rich game world. React has many ways to manage state, but the useState hook is a very convenient abstraction that makes it somewhat easy to do so.

- [ ] Describe props.

Props, short for properties, is a way to pass data across components. For example, if you have a scoreboard app, it will contain values pertaining to score, period of play, time left in periods, etc. Say, if you want the component that displays the period of play to change upon the expiration of a timer, the timer component would pass the value to the period of play component, which would then know when the period expired and upon expiry, increment the period of play. In order to use props, a parent component will have to contain some kind of data, whether that is generated via an array or an API, and then you pass it down to a child component when you reference that component in JSX in the parent component. The child component can then access that data when you feed in the props parameter into that child component. They are always stored as objects, so it is important to log the props when they are passed through to know how to navigate and use the data to suit your purposes. 

- [ ] What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is anything that affects something outside the scope of the function being executed. For example, a network request that communicates with a third party, which could trigger logs being recorded or data to be saved or updated. They can also change the value of a closure scoped variable. React supplies the useEffect hook which allows for easy syncing of data and props, where you call useEffect and pass in a cb function, and even specify for it to only run when certain data is effected (to avoid unnecessary re-renders or infinite re-renders).

## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [ ] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
- [ ] Create a new Branch locally: `git checkout -b <firstName-lastName>`.
- [ ] Change directories into `./starwars` (`cd starwars`) and run `yarn install` or `npm install` to retrieve all needed dependencies.
- [ ] Once you have installed the _node_modules_, run `yarn start` or `npm start` to get your server up and running.
- [ ] With the server up and running, open Chrome and head over to `localhost:3000` and view your beautiful app. Maybe it's not _that_ pretty... _yet_, your goal is to ensure this project becomes a thing of beauty.
Follow these steps for completing your project.
- [ ] Implement the project on this Branch, **committing progress & changes often.**
- [ ] Push commits: `git push origin <firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request.
- [ ] TL then will count the HW as done by merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] Fetch a list of Star Wars characters from the [Star Wars API (or SWAPI)](https://swapi.co/) and render them to the screen. 
- [ ] Follow the documentation to learn how to fetch a list of "people". However, don't spend _too_ long on this. Here is a link for you to follow if you've looked around the docs for about 15 minutes or so and haven't found where to go - [Secret Link to Awesomeness 🤫](https://swapi.co/documentation#people).
- [ ] Set the data you fetch to state.
- [ ] Map over the list and render a component for each character on the page.
- [ ] You must display at least one element for each star wars character in the data set.
- [ ] The elements must be styled with either Reactstrap or styled-components - don't rely on browser default styles.

#### Required best practices:

- [ ] Consistent naming. Examples: variables, functions, Components, and file/folder organization.
- [ ] Consistent spacing. Examples: line breaks, around arguments and before/after functions.
- [ ] Consistent quotation usage.
- [ ] Spell-check.
- [ ] Schedule time to review, refine and reassess your work.


It is better to submit a challenge that meets [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) than one that attempts too much and fails.

## Stretch Problems
- [ ] Next week we will be looking at React forms. Look a head and try to create a search form that will filter through the data displayed from your characters. 

- [ ] Build a pagination system that will allow you to load the next page of data.
  - `console.log()` the data coming back from the server.
  - Notice that there are `next` and `previous` fields that give you a URL.
  - You can build a function that will get characters called `getCharacters` that you can use dynamically to get the next or previous set of characters. You would need to supply it with the proper fields, and you'll need to set up more state to do this.

<!--
- [ ] Build another app from scratch that looks very similar to this one. Inside of your main `App` component fetch some data in this same fashion from this url `https://dog.ceo/dog-api/#all` you'll have to follow the documentation at that website and figure out how to change up the code you've seen here in this Star Wars app in order to properly fetch the data and store it on Component State.
-->
