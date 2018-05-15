express_walkthrough
ExpressStarter

Introduction to Backend Foundations with JavaScript
Setup
Follow the below setup to install Express, (Nodemon), and Postman.

Express
We will be using Express for the development of this course. Express adds functionality that simplifies Node development and allows us to reuse code.

Express is a dependency that our project will depend on. Because of this, you can download it through NPM just like any other project specific dependency we may need. The command for this is:

$ npm install express --save

However, for our purposes, we are going to be using an Express starter app to get familiar with Express. Express supports numerous view engines with Jade being the most popular (was also built by TJ Holowaychuk). However, because of the amount of abstraction Jade uses, we will be turning our focus towards Handlebars. Handlebars does not abstract the HTML away from you like Jade; it allows you to add specific tags where you would like to inject the dynamic content.

To get started, let's install the Express starter-app available to use from Express. Follow the below steps:

Below will install the Express generator globally:

npm install express-generator -g

Cd onto your desktop

1.  Below will generate the Express starter app for us. We are setting the view to use Handlebars and calling the app express_starter_app

express --view=hbs express_starter_app

Cd into the express_starter_app

Run the following command to start up the app:

DEBUG=starter-app:* npm start

Navigate to localhost:3000 in your Chrome browser. You should now see the below: Express Starter AppFigure 1-2: Express Starter App
Great work! Now you have a working Express App. As you continue throughout this course, we will be learning the different parts of this starter app along with more interesting Backend capabilities!

Tip!
Stop your server because we are going to be running more commands in the next section.

Nodemon
Nodemon is a very useful tool when working with a server. It is a utility that will continuously monitor your application and when changes are made, it will automatically restart your server. Currently, in your starter project you just set up, if you made any changes, you would have to stop and restart your server, which becomes really annoying when you are constantly making changes. Nodemon solves that problem!

2. npm install

3. The first thing you need to do is install Nodemon globally by running the below command:

npm install -g nodemon

Next, you need to install Nodemon as a devDependency in your package.json file. Within your starter project, run the following:

npm install --save-dev nodemon

Now, to start your server with Nodemon, run the following:

nodemon

And there you have it! You have a server up and running and any time you make a change to this project, Nodemon will restart the server and all you will need to do is refresh your webpage.

4. Exploring the Starter App

Now that you are all set up for this course, let's explore the starter project. Follow the below steps.

5. Change Title
Within your starter app, open up the two folders routes and views. You should see the below:

Routes/Views filesFigure 1-5: Routes/Views Files

To begin, open up the routes/index.js and views/index.hbs files

Because we are using handlebars, our files that contain the views of the application will have the .hbs file extension instead of the .html extension you are used to. These .hbs files will look very similar to HTML files, but you will see slight differences.
Let's first look at the index.hbs file. There are only two lines of code within this file, shown below:

<h1>{{title}}</h1>
<p>Welcome to {{title}}</p>
As you can see, we are using {{title}} within both HTML tags in this file. This is Handlebars controlling the view based on what we have defined title to be. This definition happens within the routes/index.js file.
Open up the routes/index.js file. You should see the below code:

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
The first line requires the use of Express that is already installed within this starter project and sets it to a variable, rightly named express.
The second line is a variable called router set to express.Router() which utilizes the Express routing method.
The next three lines are using the router method of GET.
This is an HTTP method receives data from a specified source. We will explore more HTTP methods later in this course.
We will be exploring the different parts of this method throughout this course.
Within the router.get() method is a res.render() method. This is where we tell the server to render a certain file. In this case, it is rendering the views/index.hbs file. This is also where we define the title that we saw within the views/index.hbs file earlier. Handlebars uses the server to dynamically change what is shown on the HTML page.
Try changing the title from Express to anything else. Once that is done, refresh the page and you should now see the change.

6. Change File Rendered

Now let's change the res.render() method to render the error.hbs file. Currently, nothing will show up.

Add the below line on the 4th line of the error.hbs file

<p>error!</p>
Next, change the res.render() method to render error instead of index.

Once you have completed steps 5 and 6, refresh localhost:3000. You should now see error! on the page.

Lastly, change the res.render() method back to render index instead of error and remove the line we added to the error.hbs file.

Now that your code is back to its original form, what if you wanted to add another field within the res.render() method to then use in the index.hbs file? It's actually not too hard. All you need to do is add another key/value pair within the object that title: 'Express' is located within. Keep in mind that this is just an object that you have seen before, so the key/value pairs are separated by a comma.

Add another key/value pair within the object. The key should be name and the value should be your name as a string. Now, go into the index.hbs file and add the below code:
<div>Hi! My name is {{name}}</div>
Once that is done, refresh localhost:3000. You should now see your name within the sentence we created above.
Using Handlebars to Loop
Now that you have a basic idea of how Handlebars works with the server, let's see how we can use Handlebars to loop through either an array or an object. The idea of what is happening is essentially the same as what you have learned previously using a for loop, but the syntax is different.

7. Loop Through an Array

Consider the below code:

routes/index.js file:

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Users',
    users: ['Jessica', 'Ken', 'Anthony', 'Clara']
  });
});

module.exports = router;
Above, instead of having just one key/value pair within the object in the res.render() method, we have two key/value pairs, and the second is an array. Next, we are going to learn how to loop through this nested array inside of the index.hbs file. Consider the following code:

views/index.hbs file:

<h1>{{title}}</h1>
<p>Welcome to the {{title}} list</p>

<ul>
    {{#each users}}
    <li>{{this}}</li>
    {{/each}}
</ul>
Above, we are again using the title key/value pair which will render the word Users. Then, we have an unordered list that includes an li element. Wrapped around the li element is our Handlebar each loop. We define that we are using Handlebars with the double curly braces {{}}, then use #each to define the loop and finally we define what we are looping through, which in this case is the users key/value pair within the object in res.render(). We can then tell Handlebars to list out each of the values within the array with the this keyword. In this case, we do not need to define users.this because we have already defined users within the loop.

Try It!
Add the above code to your index.js and index.hbs files. Once you have done that, refresh localhost:3000 and you will now see the list of each of the users. Good work!

8. 