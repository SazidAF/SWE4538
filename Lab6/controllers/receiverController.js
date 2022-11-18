const fs = require('fs');


const getUsers = (req, res) => {
  const content = fs.readFileSync(__dirname + '/users.txt',{ encoding: 'utf-8', flag:'r'}).toString().split(/\r?\n/);
  content.pop();
  console.log(content);
  res.render("sendText", {receiver: content});
}

module.exports = { getUsers };
