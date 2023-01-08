# REST API

The files for each exercise will be found in the respective directory level.
Each directory will have a 'src' directory with the app.js

## LEVEL1

### Exercise 1

**Question** ⛔️

Create a server with Express that returns to a GET request on the endpoint /user a json with your name, age and the URL from where the request is made.

**Solution** ✅

For this exercise it was creating a simple express server and route. My initial thought was to create a JSON with the information required. This way using app.json() to read the file.

### EXERCISE 2

**Question** ⛔️

Add an endpoint /upload to upload a png , jpg or gif file to the server with a POST request and return an error message if the file extension does not match these.

**Solution** ✅

Created and endpoint for upload. Installed Multer which is a package that helps with uploading files.
<br>
To work with Multer I created two variables, one for the PATH and one for the MIMETYPE of the files. They were both used to create the upload function. The storage, fileFilter and limits where used in the multer instance.
