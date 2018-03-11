# React Meeting Room

A simple web app to book meeting room inside an office.

![React Meeting Room](https://res.cloudinary.com/sivadass/image/upload/v1520738442/react-meeting-room-app.gif)

## What this web-app can do for you?
1.  This web-app will help you to allocate meeting room to all departments inside a company.
2.  It uses google calendar API as backend, so the events can be created anywhere using Google Calendar APP or through Web.
3.  Created events can be viewed from anywhere via desktop, tablet or mobile-phone.
4.  The app will show you meeting room availability status instantly.  
5.  You can view the list of all meetings scheduled for the day in a easily graspable view.


## Live Demo 
[https://sivadass.github.io/react-meeting-room/](https://sivadass.github.io/react-meeting-room/)

## Setup

### Google API Key
1. Goto [Google Cloud Platform Console](https://console.cloud.google.com/cloud-resource-manager) and create a new project.
2.  Get inside **APIs**  section and click **Library** Tab.
3.  Under the Library, search for **Google Calendar API** and click **ENABLE**.
4.  Under Credentials Tab, click **Create Credentials** button and select API Key on dropdown list.
5.  A popup will open, which will give you the **API Key** (GOOGLE_API_KEY). 
6.  Now Create your web client with following settings. (Give your own desired port number and urls for your app).

    ![Setup authorized javascript origins](https://res.cloudinary.com/sivadass/image/upload/v1520732210/screen-shots/setup-authorized-javascript-origins.png)

### Google Calendar Configuartion
1.  Goto [Google Calendar](https://calendar.google.com "Google Calendar") and create a new calendar.
2.  Under *Access Permissions* section, just enable the  **Make available to public** checkbox. And in the right side dropdown, make sure **See all event details** option is selected. 

    ![Step 1](https://res.cloudinary.com/sivadass/image/upload/v1520704625/screen-shots/step-1.png)

3.  Grab the **Calendar ID** (CALENDAR_ID) from *Integrate Calendar* section.

    ![Step 2](https://res.cloudinary.com/sivadass/image/upload/v1520704853/step-2_x54i28.png)

4.  And also add few events to our newly created calendar, so that you will have some data to see while developing.

### Local Setup
1.  Clone the repository using `git clone https://github.com/sivadass/react-meeting-room.git`.
2.  Enter into the project folder and install all dependencies using `npm install`  
3.  Now open the file `config.js` inside *src* folder and update the **GOOGLE_API_KEY** and **CALENDAR_ID** which you have got from above steps.
4.  Now start the app by `npm start`, the project will load in the browser at `http://localhost:8012/`