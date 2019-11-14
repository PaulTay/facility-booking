# Facility Booking Prototype
This repository contains a basic interface and log instrumentation to perform an experiment on a facility booking prototype.

Github Pages URL: 

https://paultay.github.io/facility-booking/SearchPage.html?layoutID=1&arrangementID=1&conditionID=2&trialID=1&MID=1

If you are accessing the URL directly, you are expected to change the numeric value of following parameters to display different combinations of the interface.

| URL parameter       | Description                             |
| ------------------- | --------------------------------------- |
| `layoutID`          | Total 2 types of layout (`1, 2`)        |
| `arrangementID`     | Total 4 arrangements (`1, 2, 3, 4`)     |
| `conditionID`       | Total 4 conditions (`1, 2, 3, 4`)       |
| `trialID`           | Total 3 trials (`1, 2, 3`)              |

 You may fork this repository to your own Github account and clone your forked version for development. This will also help you use Github pages for hosting if you plan to conduct experiments online.

 ## Project Structure
 The interface is a static web project. However because of cross origin restrictions you will need a web server to run the experiment. Either turn on Github Pages(https://pages.github.com/) for your forked repository or setup a local server of your choice.

    ├── SearchPage.html             # Search Interface, a display of search form
    ├── BookingPage.html            # Booking Interface, a display of search result
    ├── consent.html                # Survey Consent
    ├── css                         # Style Sheets          
         ├── style.css              # Main stylesheet
         ├── ...                    
    ├── js                          # Javascript
         ├── globalconstant.js      # Global constant used in the app  
         ├── logging.js             # Log script capture user interaction
         ├── ...
    ├── img                         # Image Assets

Ideally, you shouldn't need to edit any of the files unless your experimental design requires modifications to the log implementation. 