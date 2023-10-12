# Credit Card Validator Application

![Credit Card Validator](https://github.com/bestevez32/credit-card-validator/assets/12898955/fe4a1654-9b5f-44cf-912d-ef2de69e4110)


## Project Requirements

- Technical Requirements
  - Use React, node.js and typescript
  - Authentication and DB not required
- Functional Requirement
  - The main purpose of this application is to create a webpage to validate a
    Credit Card number
  - Use the Luhn checksum algorithm for validation
  - Validation should happen in the back-end (API) not the frontend
    Minimal UI Requirements
  - At least one text box should be included for the credit card input
  - Screen should display if the number is valid or not

## The Project Folder Structure and Running the Application Locally

This Credit Card Validator project contains two folders one for the Server and one for the Client

**To start the server locally navigate in a terminal to the Server folder**

### `Running the server with a watcher`

- Run: `npm run dev`
  - This will run the server in nodemon
  - Nodemon will detect any code changes and restart the server
- The server will run at http://localhost:5000

### `Running the server without a watcher`

- Run: `npm start`
  - Any code changes to the server files will require a manual restart

**To start the client application locally navigate in a terminal to the Client folder**

### `Running the client`

- Run: `npm run start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

In the project directory, you can run:

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
