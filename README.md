monitor-temperature
===================

This project uses raspberry pi to monitor temperature of where the pi is located. The project will mostly focus on building the database [SQLITE] and a webserver[NODE.JS] to make a web application that displays temperature to the world.

What we need/use? 

  - Raspberry Pi, needs to be already setup with OS installed and connected to the internet. A guide on how to this step can be found here raspberrypi.org/quick-start-guide
  - Database, we will use sqlite database to store our data. 
  - Webserver, we will use Node.js
  - Framework Express to facilitate the communication between database
  - Template Jade 
  - Few plugins to make a nice web application 

Note: I am using Raspian OS for my Pi (this will not work on other OS)

Step 1) : Install Raspian 
  
  - This link raspberrypi.org/quick-start-guide provides all the steps needed to install an operating system on a pi. 
  - Once the pi is ready to go, run an update.

Step 2) : Install Node.js

  -#Make a new dir where you'll put the binary
    sudo mkdir /opt/node
 
  -#Get it
    wget http://nodejs.org/dist/v0.10.4/node-v0.10.4-linux-arm-pi.tar.gz
 
  -#unpack
    tar xvzf node-v0.10.4-linux-arm-pi.tar.gz
 
  -#Copy to the dir you made as the first step
    sudo cp -r node-v0.10.2-linux-arm-pi/* /opt/node
 
  -#Add node to your path so you can call it with just "node"
    cd ~
    vim .bash_profile
 
  -#Add these lines to the file you opened
    PATH=$PATH:/opt/node/bin
    export PATH

  -#Save and exit
 
  #Test
    node -v
    npm -v
    

Step 2) : Install Sqlite
  
  -there are some requirements to install this module. check out this link https://github.com/mapbox/node-sqlite3
    npm install https://github.com/mapbox/node-sqlite3/tarball/master
  
  -If installation goes well let's create a database. To run sqlite form the command line run following:
    sqlite3 database_name
  
  -The prompt will look like that:
  
      SQLite version 3.7.13 2012-06-11 02:05:22
      Enter ".help" for instructions
      Enter SQL statements terminated with a ";"
      sqlite> 
  
  -From there you can run SQL queries. To create table and add rows type the following commands:
      $ sqlite3 temperature 
      ....
      sqlite>  create table temperature(date varchar(255), value int);
      sqlite>  insert into temperature(date('now'), 75);
      sqlite>  insert into temperature(date('now'), 75);
  
  close database (ctrl + C ) now you have a database named temperature that contains a table named temperature. with two rows
    
     
Step 3) : Install Express and Jade 

  -Type the following conmmand to install express:
    npm install -g express
  
  -Then create a project eith express
    express --sessions project_name
  
  -You'll see something like that: 
        create : nodetest1
        create : nodetest1/package.json
        create : nodetest1/app.js
        create : nodetest1/routes
        create : nodetest1/routes/index.js
        create : nodetest1/routes/user.js
        create : nodetest1/views
        create : nodetest1/views/layout.jade
        create : nodetest1/views/index.jade
        create : nodetest1/public/images
        create : nodetest1/public/javascripts
        create : nodetest1/public
        create : nodetest1/public/stylesheets
        create : nodetest1/public/stylesheets/style.css
        
        install dependencies:
        $ cd nodetest1 && npm install
        
        run the app:
        $ node app
       
  -Edite dependancies. Navigate to the project you create with express and open the file package.json and edit it so it looks like that: 
        {
          "name": "application-name",
          "version": "0.0.1",
          "private": true,
          "scripts": {
            "start": "node app.js"
          },
          "dependencies": {
            "express": "3.4.3",
            "jade": "*",
            "sqlite3" : "2.0.0"
          }
  
  -Run the following command to install dependancies: 
    npm install
    
  -The project then is set and ready to test. So run the application (still at the project root directory) :
    node app.js
    
  -If all is good you should see the following 
    Express server listening on port 3000
    
  -Acces the application from localhost:3000
  
      Note: the app.js file contain all configurations for the application it specifies what template we will be using and what dir are static..etc.
      for more information on how express works visit this link http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/
  
  

Application Link: 24.168.37.198:8282/temperature
