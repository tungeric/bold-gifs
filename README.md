# Welcome to a Bold take on Gifs
heh sorry I needed to get that out of my system. Okay moving on.

## Project Requirements
Create a simple application that displays a set of 10 gifs in random order. The gifs should be loaded to the client side using an API endpoint built for the application. Add a button to the UI that will load the gifs in random order. Display the gifs in the UI as a grid. Reloading the gifs should not refresh the page.

## What I did
Server code can be found on `server.js` and is built using `ExpressJS`. It essentially features a single endpoint, `/api/gifs`, which returns a hardcoded list of gifs, each with a unique name and url.

On the client side, all files are in the `/client` directory. It was initialized using `create-react-app` and subsequently cleaned up. The app for all intents and purposes starts with `App.js`, which fetches the gifs from the server when it's loaded and saves it in the App component state. Each time the button is clicked, the list is reshuffled and re-rendered in the new order.

## To run
First you need to install the required packages with `yarn`.
To run the project, enter `yarn dev` and navigate to `http://localhost:3000`
If you want to hit the api directly, it's on `http://localhost:5000`. You can test the endpoint directly from there.

## Some discussion on what could be better
If this was an application I needed to maintain long term, for starters the server would likely be hooked up to a database of some sort so the gifs are not a hardcoded list in the server. Also, I would likely choose to move code over to use TypeScript to help catch errors before they go into production. This also helps to make code more understandable since you know what input and output types are.

Depending on the nature of the application, an app-wide data management system such as Redux could also be useful to help manage data and prevent excessive data from being fetched because the data only exists for the pages/components rendered.

Also, I would likely organize code differently, particularly on the server side, which currently is a single `server.js` file. I would likely divide the server code into a controller/api layer, then add in service layers and database access layers. On the client side, currently everything is plopped into a `Util.js` file but this would likely be better organized as well.

I could say I would organize the CSS betteer but I'm going to be honest, I'd probably try to keep all the CSS in a single file and organized purely with class names as long as I possibly can manage :D

For performance, I'm currently already only fetching data one time per app page load, as any subsequent button presses only shuffles the data as it uses existing data sitting on the component state. This could be moved to Redux in the event of the user navigating away to another page and coming back to it.

Another option on the client side to minimize server fetches is to store the entire fetched blob onto local storage or some other form of browser caching as well as a timestamp so we don't even bother fetching code from the server until the time elapsed exceeds X time since that timestamp.

To implement authentication for the API endpoint (I'm assuming an endpoint to sign up and log in already exist) I would store the user's session id or session token in local storage or browser cache, then pass that value in the header of the request. The server code can then check that the session token is valid prior to executing the code. The expected session token could be stored in a db or decrypted with a key management system. Once the session is validated, we can proceed with fetching happy gifs.
