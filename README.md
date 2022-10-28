# clickstream
DIY clickstream framework http://adiganguli.com/2022/10/15/a-diy-clickstream-framework/

A guided tour to build your own clickstream framework using Javascript and python
The repo is organized as follows

1. Javascript file - to be inserted in website download
2. Server code which is divided into 4 parts. Its written in Django
    a. Read event code
    b. Store in raw database
    c. Processed database for analytics at user level
    d. API to expose processed database
The server code is here https://github.com/adi2907/clickstream-server

3. Testing framework

Steps
1. For Wordpress
a. Add event_capture.js in the assets/js of your theme
b. Add the content in functions.php file of your theme




