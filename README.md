# Employee Polls Web App

## Table of Contents
  - [Description](#description "Description")
  - [App Functionality](#app-functionality "App Functionality")
  - [Installation](#installation "Installation")
  - [Data](#data "Data")
  - [Create React App](#create-react-app "Create React App")    

 
## Description

You will be building an infographic that is derived from data that is provided, as well as user input data. Object-oriented javascript is great for working with complex data, but it’s not of much use without an interface to interact with. You will be pulling in information from a form and using it to complete an array of objects that will then be appended back to the DOM. 

This may not sound like a lot, but there are a fair amount of moving pieces that rely on each other to work. You’ll need to plan out the logic of what you are trying to accomplish before you begin developing. If you find this process to be quick, there’s a list of additional functionality that you can add that all strive to improve the users’ experience. 

This project will generate a 3x3 grid of tiles (9 in total) with the human in the center tile. 

Each title will contain the species, an image, and a fact. For the human tile, you will display the name of the human rather than species and no fact is necessary for the human. 

When the user clicks to generate the infographic from the form, the grid will appear and the form will be hidden. 

The facts displayed should be random per dinosaur with an opportunity of displaying at least 6 different types of facts (3 should be from the methods you create). 

One of the titles should be for a pigeon in which the tile should always display, “All birds are considered dinosaurs.”


## App Functionality
This application have a way of impersonating/logging in as an existing user having a dropdown that appears at the root of the application that lets the user select a user from the list of existing users.
![Login](/assets/login.JPG)

Information about the logged in user appears on the page.Once the user logs in, the user is able to toggle between his/her answered and unanswered polls on the home page, which is located at the root. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom). The unanswered polls are shown by default, and the name of the logged in user is visible on the page.
![Login](/assets/login2.JPG)

 If someone tries to navigate anywhere by entering the address in the address bar, the user is asked to sign in and then the requested page is shown. The application allows the user to log out and log back in.
![Ask Login](/assets/askLogin.JPG)

When a poll is clicked on the home page, the following is shown:
- Text “Would You Rather”;
- Avatar of the user who posted the polling question; and
- Two options.
![Polls Page](/assets/pollPage.JPG)

For answered polls, each of the two options contains the following:
- Text of the option;
- Number of people who voted for that option; and
- Percentage of people who voted for that option.

The option selected by the logged-in user should be clearly marked.
![Answered Polls](/assets/answeredPolls.JPG)

Users can see the ranking of users on the leaderboard.
![Leaderboard](/assets/leaderboard.JPG)

## Installation

- install all project dependencies with `npm install`
- start the development server with `npm start`


## Data

The `_DATA.js` file represents a fake database and methods that let you access the data.

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| password   | String           | The user’s password in order to log in the application |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database. If one of the parameters are missing, an error is thrown.
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database. If one of the parameters are missing, an error is thrown.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).
