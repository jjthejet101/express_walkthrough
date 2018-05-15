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

8. Loop Through an Array of Objects

Now, what if you wanted to loop through an array of objects? This is essentially the same as what we did above. Consider the below index.js and index.hbs files:

routes/index.js file

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'My Cats',
    cats: [{ name: 'Winston' }, { name: 'Churchill' }, { name: 'Walnut' }]
  });
});

module.exports = router;
views/index.hbs file:

<h1>{{title}}</h1>
<p>Welcome to a list of {{title}}</p>

<ul>
    {{#each cats}}
    <li>{{name}}</li>
    {{/each}}
</ul>
In the index.js file, we have an array of cats that contains three separate objects. Within the index.hbs file, we are now looping through the cats field in the res.render() object. But now instead of using the this keyword to list out each field, we are defining the key within the array's objects that we want to list out. Currently, there is only one key/value pair within each of these objects, but there could be multiple and we could define which key/value pair to list by defining the key within the <li> element itself, as we have done above.

Great work! You have explored this basic starter app we got from Express and learned how to loop using Handlebars. Remember, Handlebars is the templating system we will be using throughout this course which will use the server to dynamically provide specific information onto our webpage.

9. Key Terms

Below is a list and short description of the important keywords you have learned in this lesson. Please read through and go back and review any concepts you don't fully understand. Great Work!

Keyword	Description
Node	An environment that runs JavaScript code server-side.
Express	Express is currently the most popular framework built on top of Node that helps organize server-side code into an MVC architecture.
Postman	Postman is a tool used to test the functionality of the backend. It allows the developer to send requests to the server and see the response in multiple formats.
Server	Listens to requests from the outside world and responds back as instructed by the programmer.
Handlebars	Handlebars is a templating system that uses the server to dynamically provide specific information onto our webpage.

10. HTTP REQUEST AND RESPONSE - HTTP Verbs

HTTP Verbs
HTTP request verbs are used to indicate the desired action to be performed within our request. There are four commonly used HTTP requests, GET, POST, PUT, and DELETE. These four request methods are often referred to as CRUD operations, which stands for Create, Read, Update, and Delete. CRUD operations are the basics for persisting data on the database.

In lesson one, we worked a little bit with the below function:

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
In the above code, we are using the HTTP verb GET with the router.get() function. When we use this, we are getting data specified from the server. Below are the different, commonly used HTTP vers, what they do and how they are related to the CRUD operation.

POST is used to send data to the specified resource on the server. As a result, the state of the server is changed. POST is represented by the C, or Create, in CRUD.
GET is used to read a specified resource. This operation does not change the data as a result since you are just retrieving data.
PUT is used to update a specified resource with the data being sent and will change the data as it is being updated.
DELETE is used to delete the specified resource. This changes the data as well because you are deleting specific data out of the database.

11. HTTP Verbs with Postman

Now that you have an understanding of the common HTTP verbs, let's see them working in Postman. Return to your project you created in Lesson 1 named express_starter_app. We will be working in this project. Add the following code so your routes/index.js file looks like below:

var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  res.send('You successfully created a POST route!');
});

router.get('/', function(req, res) {
  res.send('You successfully created a GET route!');
});

router.put('/', function(req, res) {
  res.send('You successfully created a PUT route!');
});

router.delete('/', function(req, res) {
  res.send('You successfully created a DELETE route!');
});

module.exports = router;
Above, we are using HTTP verbs and when we call these within Postman, the function called will return a string. Start up nodemon and return to Postman.

Postman is used for testing the functionality of the backend by sending requests to the server. Open Postman and locate the "Enter request URL" input field to the left of the blue "Send" button. The base URL for the server being used on our local computer is localhost. The port number for the server is 3000, which can be found in the application or the console when the server is started. Since the server is being mapped to the path /, the full URL to be tested is simply localhost:3000. Enter this URL into the input field. The "GET" operation is already selected to the left of the input field, so there is no need to change this at the moment. Then, click the blue "Send" button to send the request to the server. Once you have clicked this button, you should see the below:

Postman Simple Server GetFigure 2-1: Postamn Get

Next, try each of the other HTTP methods. Choose either POST, PUT or DELETE from the dropdown, shown below:

Postman HTTP Method OperationsFigure 2-2: Postman HTTP Method Operations

Each time you try one of these four methods (GET, POST, PUT or DELETE), you should see the cooresponding string we provided within the res.send() method.

Tip!
Keep in mind that Postman takes the place of a client. A client would be the front end application requesting data from the database, and Postman is simulating that for us.

12. The Request and Response Objects

Now, it is important to understand what request and response are. We saw this in lesson 1 within the render.get() method shown below:

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
The req param stands for request and the res stands for response. So above, we are defining what we are requesting, in this case the index.js file, and then the response will be the object that contains the title. Let's look a little more into what the request and response params provide to us.

13. Request

The request object (often seen as req or request) begins as an instance of http.IncomingMessage, which is a core piece of Node. Let's look at an example using the req.query functionality provided to use by the request object.

req.query defines the parameters within the URL which we can then use on the page. Let's check out how this works.

14. Defining Parameters in URL

Let's look at an example where we define a name of a person within the URL and use req.query to use that name in our res.send. Consider below:

router.get('/', function(req, res) {
  let queryName = req.query.name;
  if (queryName) {
    res.send('Welcome to the page, ' + queryName);
  } else {
    res.send('Sad, no one is here!');
  }
});
Within the router.get() function, we have a variable named queryName. Whatever name we define within the URL, we will set it to a variable named queryName. Then, if queryName is true (meaning if there was a name set within the URL), then send the string Welcome to the page, plus the name defined in the URL. Else (meaning if there was no named defined in the URL), then send the string Sad, no one is here!.

Now, to test this out, we need to change the URL in our Postman. Change your URL to look like below:

localhost:3000?name=Ted
When we are defining the req.query.name, the syntax is to have a question mark ?, then set what name you want to use to name.

Now, if you click Send, you should now see the response Welcome to the page, Ted. If you return to just localhost:3000, you should see the response Sad, no one is here!.

15. Checking Against an Array

Next, lets look at an example where we use req.query to check against an array.

var express = require('express');
var router = express.Router();

let animals = ['pig', 'goat', 'dog', 'cat'];

/* GET home page. */
router.get('/', function(req, res, next) {
  let queryAnimal = req.query.animal;
  if (animals.includes(queryAnimal)) {
    res.send('Yep, we have a ' + queryAnimal);
  } else {
    res.send('Nope, no ' + queryAnimal + ' here. ');
  }
});

module.exports = router;
Above, we have an array named animals that contains 4 animals. Within the router.get(), we are doing what we have done before: setting req.query.animal to a variable (we define this within the URL). We then check to see if the array animals includes the variable queryAnimal. If it does, we return a string saying we already have that particular animal. If not, it returns a string saying just that.

To test this out, go into Postman and change your URL to be the following, and make sure you are on the GET method within the dropdown on the left:

localhost:3000/?animal=pig
After clicking Send, you should see the following string:

Yep, we have a pig
Now, change your URL to look like below:

localhost:3000/?animal=giraffe
You should now see the following:

Nope, no giraffe here.
Great work! You have no learned the basics of what req.query is used for. It provides you the ability to define certain parameters within the URL and then you can use that to produce a string on the page.

16. Using req.body

The req.body contains key-value pairs of data submitted in the request body. When using req.body, it will live within the router.post() method. Let's try it out within our starter project and Postman. Add the following code underneath the router.get() method within your routes/index.js file. This code will be using the already created array within your file:

router.post('/', function(req, res, next) {
  let bodyAnimal = req.body;
  if (animals.includes(bodyAnimal.animal)) {
    res.send('Already have a ' + bodyAnimal.animal + ' thanks');
  } else {
    animals.push(bodyAnimal.animal);
    res.send(animals);
  }
});
The code above is allowing for a client to input a new animal. If the animal inputted already exists within the array, it will return a string saying just that. If it doesn't already exist, the else statement will push the new animal into the array and then send back the array of animals.

Let's watch this in action in Postman. Follow the below steps to make sure it will correctly return the either a string or the array of animals.

Choose POST from the dropdown on the left.
Click on the Body tab underneath the URL input.
Click on the option raw
Choose JSON (application/json) from the dropdown next to binary.
Your Postman should now look like below:

Postman req.bodyFigure 2-3: Postman req.body

Great! Now, within the input box, type a JSON object with a key of animal and a value of whatever animal you would like. An example is located below of how to correctly write a JSON object:

{
  "animal": "penquin"
}
After you have written similar to the above JSON object, click send. You should now see that animal added to our array, shown below:

Push new animalFigure 2-4: Push New Animal

17. Handling Forms

Although this course is primarily for understanding Node and Express on the server, some partial knowledge of HTML forms is necessary.

Let's say we have the below form in our HTML that the client can fill out:

<form action="/" method="POST">
    <div>
        <label for="animal">Animal: </label>
        <input type="text" name="animal">
    </div>
    <div>
        <button type="submit">Submit</button>
    </div>
</form>
The first thing to note in this form is the action attribute. This specifies the URL that will receive the form information whenever it is submitted. If the action attribute is omitted the form will default to sending the submission to the URL, it was loaded from. Currently, we have set the action to send to our root URL. Second, is the method attribute. Notice how it is set to POST? This is an important step; HTML forms default to GET, but to send information it needs to be POST.

The third thing to note is the name attribute on the input. This is perhaps the most important thing from the perspective of the server because this is how the input field is identified.

When a user on the frontend submits a form, it submitted to the server in the request body. After a form is submitted by the user, the server handles the data however we have set it up to.

Let's try this out in Postman. First, click on x-www-form-urlencoded located next to raw. Here is where you will be able to fill out the form, close to how the user would do it. Within the form, the name attribute is the key of the key/value pair that will be created when the form is submitted. Within Postman, we can simulate that by filling in the key and value provided to us from x-www-form-urlencoded. If you fill out the key to be animal and the value to be an animal, when you click send, it will then push that animal into our array. We are simulating a user inputting an animal into a field on the front-end and then adding that to a database. Currently, we are not using a database, but an array instead to understand how this works. Fill out the key/value pair and when you click send you should see your animal in the array, as shown below:

Postman FormFigure 2-5: Postman Form