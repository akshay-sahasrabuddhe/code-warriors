# code-warriors

Title – Duckbook

Description – 
Duckbook is a Social Media Web Application. It includes Dashboard page that lists all the posts made by different users. A Userprofile page that allows users to check their own information and edit the information when needed. A friend page that lists the Friends of the user and also shows their information like Birthday, Email etc. The web application includes a friend request feature that allows the user to send a friend request to a member of Duckbook, the user can also search for different members using the search feature of the application. The user can communicate with different members using the chat functionality, and also can post their blogs, delete or edit their own blogs and comment or like other member’s blogs. This application also has a feature to show random videos and also top news and the weather of the user’s current location. 
Technologies used
Node.js, React, Redis, S3 Bucket, ImageMagick, Atlas
How To Setup
Navigate to /client and perform npm install in the terminal to install the node modules server
Navigate to /server and perform npm install in the terminal to install the node modules for server
Navigate to /socket and perform npm install in the terminal to install the node modules for socket
Run the seed file in the terminal in the /server path npm run seed 
ImageMagick Setup
The next step is to install ImageMagick on your machine since it will be needed locally for one of our image upload features to work. Download ImageMagick for your specific operating system at this link: https://imagemagick.org/script/download.php
Windows
•	You can download an executable directly at this link: https://download.imagemagick.org/ImageMagick/download/binaries/ImageMagick-7.1.0-33-Q16-HDRI-x64-dll.exe. For windows you must specifically install ImageMagick-7.1.0-34-Q16-HDRI-x64-dll.exe version.
•	Choose all default options, however, when on the "Select Additional Tasks" page, be sure to check off Install legacy utilities (e.g. convert).
•	 
•	Make sure that ImageMagick is installed at proper path. Your ImageMagick folder path should look like this C:\Program Files\ImageMagick-7.1.0-Q16-HDRI
MacOS
•	Assuming you have homebrew installed, you can install ImageMagick with brew install imagemagick and brew install ghostscript (A dependency).

Run Application

To start the Redis server use redis-server to start the server.
In the /server perform npm start in the terminal to start the express server.
In the /client perform npm start in the terminal to start the React app.
In the /socket perform npm start in the terminal to start the socket app.

Use the (http://localhost:3000/) to run the server app
Use (http://localhost:4000/) to run the React app


Mongo Link:-
https://cloud.mongodb.com/v2#/org/61394b7e700f2b76e78a56bd/projects


GitHub Repository:- 
https://github.com/akshay-sahasrabuddhe/code-warriors