## How to get and run the project

<ul>
    <li>Clone the project</li>
    <li>In the main directory run the command `npm install`</li>
    <li>Then in the `backEnd` directory run again the command `npm install`</li>
    <li>Next you need to import the database to your local server for example you can use `xampp`</li>
    <li>Next you need to configure the `db.js` "drinks\backEnd\database\db.js with the credential of your database"</li>
    <li>If everything is set in the main directory run the command `npm start` and in the backEnd directory run the command `nodemon server.js`</li>
</ul>

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Improvements

<ul>
    <li>Add pagination. Because if there a lot of data in the database and try to load them all together the application will crash. With pagination we can load them by scrolling down.</li>
    <li>Login system connected with facebook</li>
    <li>Improve the responsive layout in order to be displayed in every broswer the same</li>
    <li>We can use a cloud database like AWS or firebase instead of local database. In order to do that we have to change the schema of the databse because mysql is a table database, where data is stored in rows and columns and firebase is a JSON data base where the database structure is not tabular, it is a tree.</li>
    <li>I have to finish the implementation with `socket io` in order to every user get the new events without refresh the page</li>
</ul>