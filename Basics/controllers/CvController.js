const fs = require("fs");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let edus = [];
const sendCV = (req, res) => {

  res.render("cv", { name: "Tasnim Ahmed", educations: edus });
}
const getCV = (req, res, next) => {
  educations = JSON.stringify(req.body);

  educations = JSON.parse(String(educations));
  delete educations.submit;
  for(let i = 0; i < educations["degree"].length; i++){
    let a = [];
    for (let key in educations) {
      a.push(educations[key][i]);

    }
    edus.push(a);
  }
  console.log(edus);
  res.redirect("/");

 }

module.exports = { sendCV, getCV: sendCV, getCV };
