# Decentralized-Voting-System-Backend
Backend of the Decentralized Voting System built over the ethereum blockchain to ensure open and secure election procedure.

Backend will be built using Nodejs( Express.js to be precise ). It will involve routes for:
1) SignUp
2) Login
3) Dashboard => previous voting results can be checked and fetched from database.
4) Polls Voting Page => voting takes place here

There will be a single database with two collections( Models ) storing:
1) Users
2) Poll's collection and results.

Authorization and Authentication:
1) Will currently be using bcrypt.js and some other techniques as a starter.
2) Passport, google oauth along with cookies-sessions/jwt can be further implemented.

For all these operations REST API would be created so that interact easily with the mobile application which will be built over flutter.

Currently this is the basic planning of the backend of this dapp. ( Other pages will include landing pages/ pages to see results of each polls in the past)
