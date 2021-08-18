# Jokes UI

A full stack application to store and present the jokes from [https://github.com/15Dkatz/official_joke_api/blob/master/jokes/index.json](https://github.com/15Dkatz/official_joke_api/blob/master/jokes/index.json)

## Setup

### Prerequisites:
- Node v12.18.2+
- NPM 7.20.6+

1. Install Node.Js dependencies: `npm install`
2. Import jokes into an SQLite DB from source repository `npm run import`

### Run
2. `npm run start` 
3. Access at: [http://localhost:3000/](http://localhost:3000/)


## Project Structure

Based on a express-generator project template, replacing the default jade/pug template engine with the mustache to allow for HTML to be used but still have simple templating for the error page.

- `package.json` Project dependencies and scripts for use with npm
- `app.js` Entry point of the Express app
- `.gitignore` Exclude files from GIT
- `README.md` This file.
- `/views` Contains the HTML (as mustache files) for the UI
- `/routes` Contains express modules for resolving routes e.g `/api/joke` and `/`
- `/public` Contains public assets such as javascript and css for the UI
- `/modules` Contains modules written for the project e.g database handler
- `/bin` Contains the entry point scripts. 