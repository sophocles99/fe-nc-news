# NCNews Frontend
Welcome to my NCNews frontend web application! This application provides a user-friendly way to browse news articles on various topics and to comment on them. Written in React and styled with CSS, it uses data served by the backend project, be-nc-news.

A live version of the project is hosted at https://mcqueen-nc-news.netlify.app/  
(NB The server is hosted on a free service so it may take a minute or two to spin up due to inactivity.)

## Features
+ Mobile-first design - the application was designed with mobile use in mind
+ Responsive - the design responds to larger screen sizes
+ Routing - users can enter specific URLs such as /topics/:topic or /articles/:article_id
+ Dynamic topic filter - the topic filter buttons are created dynamically by querying the database
+ Popup menu - the menu allows sorting of articles by date, number of comments, etc
+ Dark/light mode - also selectable in the popup menu
+ Vote on an article by clicking the upvote or downvote buttons
+ Comment on an article - start typing in the comment box to leave a comment
+ Delete a comment which you have left

## Installing a local version
If you would like to use a local version of this project, follow the steps below.

Clone the repository:
```bash
git clone https://github.com/sophocles99/fe-nc-news.git
```
Navigate to the project folder:
```bash
cd fe-nc-news
```
Install packages
```bash
npm install
```
Start the development server:
```bash
npm run dev
```

## Dependencies
axios: ^1.4.0  
react: ^18.2.0  
react-dom: ^18.2.0  
react-icons: ^4.10.1  
react-router-dom: ^6.14.1

## Next steps
The logged in user is currently hard-coded as tickle122, so the user icon is inactive. So the next steps for this project would be:
+ Create a /users/signup endpoint on the backend and update the database to store a hashed password
+ Create a /users/login endpoint to allow a user to log in
+ Create a login modal to allow users to sign up or log in and out
+ Consider tracking the logged-in status using cookies
+ Modify the database and the frontend to keep track of votes by user so that each user can only upvote or downvote an article once