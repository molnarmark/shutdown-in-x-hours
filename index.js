#!/usr/bin/env node
"use strict";
let exec = require("child_process").exec;

let hours = process.argv[2];
let seconds = hours * 3600;
exec("shutdown -s -t " + seconds);
console.log("Your computer is set to shut down automatically in " + hours + " hours.");