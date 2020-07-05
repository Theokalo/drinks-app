## How to get and run the project

<ul>
    <li>Clone the project</li>
    <li>In the <b>main</b> directory run the command <b>npm install</b></li>
    <li>Then in the <b>backEnd</b> directory run again the command <b>npm install</b></li>
    <li>Next you need to import the database <b>drinks.sql</b> to your local server for example you can use <b>xampp</b></li>
    <li>Next you need to configure the <b>db.js</b> <u><i>drinks\backEnd\database\db.js</i></u> with the credential of your database</li>
    <li>If everything is set in the <b>main</b> directory run the command <b>npm start</b> and in the <b>backEnd</b> directory run the command <b>nodemon server.js</b></li>
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