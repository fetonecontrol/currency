# _{Currency Exchange}_

#### _{Converts U.S. dollars into other currencys}, {7-3-20_

#### By _**{Frederick Ernest}**_

## Description

Behavior 1: Applicatio makes an API call and returns any error in a message if call cannot be completed

Input :  $10.00 to Korean Won
Output : Error: 429, Too many requests

Behavior 2: User may input U.S. dollar amount and return converted amount at current exchange rate in currency of their chocie.

Input : $10.00 U.S. Dollars to Phillipine Pesos
Output : 494.90 Phillipine Pesos

Input : $10.00 U.S. Dollars to Mexican Pesos
Output : 165.19 Mexican Pesos

Behavior 3 : User asks for currency type or information that API does not have
Input : $10.00 U.S. Dollars to Klingon Darsek
Output : Error, API cannot resolve this request, currency type not found


## Setup/Installation Requirements

* _To have total functionality, user will need their own distinct API key._
* _Navigate your browser to (https://www.exchangerate-api.com/)_
* _Input email @ and click "Get Key", you'll be taken to a dashboard with you API key._

* _Afterward, navigate your browser to https://github.com/fetonecontrol/currency and download repository to your desktop_
* _Alternatively use the commmand "git clone https://github.com/fetonecontrol/currency" to clone repo to directory of your choice_
* _Drag entire directory to your favorite code editor to open, or navigate in the command line to the root directory holding the project directory, and use "code •project name• to open_
* _In your command line interface, use "npm run install" to install dependancies_
* _Use "npm run start" to open a live development server, or "npm run build" to build a distribution.


## Known Bugs

_{no known bugs}_

## Support and contact details

_{Contact Frederick Ernest @ frederick.ernest@gmail.com for all queries}_

## Technologies Used

_{Uses HTML, CSS, JavaScript, and impliments API calls, ES6 features like classes and template literals}_

### License

Open source under the MIT licence.

Copyright (c) 2020 **_{Frederick Ernest}_**
