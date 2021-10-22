# Calendar apps

#### 1. Propose a data structure to use for this screen. How the backend should return data to you. Please explain why you choose this structure.

For this app I choose to use MongoDB, a document type database as backend. The main idea is I will create a schema model call "Event" is the backend, which can be called by 
using RESTful api. However, due to the short amount of time, I used localstorage and react context in this version

#### 2. Let us know what you have learned on this project

This is the first time I work with a calendar app. And to be honest it is more difficult than I expected. Most of the time I experiment which component should be used. 
I have tried using prebuilt npm package for calendar but it does not look good. Then I used the calendar from ant design but it has limited option in handling events 
(onClick, onChange) so I decided to build it from scratch, using array, matrix and table. I looked for guidance and preference on youtube and medium

#### 3. Let us know if you can continue to develop on this project, what will you work on.

First I want to migrate this app from local storage to actual fullstack app, using MongoDB to store database, Node/Express to create RESTful api in backend and Redux to 
fetch data in frontend. And I need to research more how to detect the eventId for each specific event. 

Then I want to improve the layout. Currently it looks a bit simple. I took inspiration from the actual Google Calendar, one of my weakness is I need some kind of preference or sample to build an app. 
If I have to design it from the start, I would be more time-consuming. It want to make it more colorful, to distinguish which types of event
