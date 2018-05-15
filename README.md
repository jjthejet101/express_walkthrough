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