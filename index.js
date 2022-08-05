// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const path = require('path');

const PORT = 80

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use('/', express.static(path.join(__dirname, 'static')));


app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
