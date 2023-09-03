# NCNews Frontend
Welcome to my NCNews frontend web application! Written using React, this application provides a user-friendly way to browse articles on various topics and to comment on them. It uses data served by the backend project, be-nc-news.

A live version of the project is hosted at https://mcqueen-nc-news.netlify.app/  
(NB The server is hosted on a free service so it may take a minute or two to spin up due to inactivity.)

## Features
+ Mobile-first design - the application was designed with mobile use in mind
+ Responsive - the design responds to larger screen sizes
+ Dynamic topic filter - the topic filter buttons are created dynamically by querying the database
+ Popup menu - the menu allows sorting of articles by date, number of comments, etc
+ Dark/light mode - also selectable in the popup menu (uses a custom React hook to provide context)
+ Vote on an article by clicking the upvote or downvote buttons
+ Comment on an article - start typing in the comment box to leave a comment
+ Delete a comment which you have left

## Next steps
The logged in user is currently hard-coded as tickle122, so the user icon is inactive. The next steps for this project are:
+ Create a /users/signup endpoint on the backend and update the database to store a hashed password
+ Create a /users/login endpoint to allow a user to log in
+ Create a login modal to allow users to sign up or log in and out
+ Modify the database and the frontend to keep track of votes by user so that each user can only upvote or downvote an article once

## Installing a local version
If you would like to use a local version of this project, follow the steps below.

Enter the following command to clone the repository:
```bash
git clone https://github.com/sophocles99/be-nc-news.git
```
Navigate to the project folder:
```bash
cd be-nc-news
```
Install packages
```bash
npm install
```
Start the development server:
```bash
npm run dev
```