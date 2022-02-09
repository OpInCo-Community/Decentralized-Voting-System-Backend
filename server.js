// Adding basic boilerplate code for the server.js file
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const Web3 = require("web3");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => console.log("The server is running"));