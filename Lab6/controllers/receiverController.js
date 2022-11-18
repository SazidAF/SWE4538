const fs = require('fs');

const getMessage = (req, res) => {
  const content = fs.readFileSync(__dirname + '/messages.txt', {encoding:'utf-8', flag:'r'}).toString().split(/\r?\n/);
  content.pop();
  let messages = [];
  content.forEach(element => {
    messages.push(JSON.parse(element));
  })
  return messages;
}
const postFilter = (req, res) => {
  let filterBody = JSON.stringify({
    sendFilter: req.body.sendFilter,
    recFilter: req.body.recFilter
  });
  return filterBody;
}


const getUsers = (req, res) => {
  const content = fs.readFileSync(__dirname + '/users.txt',{ encoding: 'utf-8', flag:'r'}).toString().split(/\r?\n/);
  content.pop();
  res.render("sendText", {receiver: content, sender: content, messages: getMessage()});

}

const postMessage = (req, res) => {
  let messageBody = JSON.stringify({
    sender: req.body.sender,
    receiver: req.body.receiver,
    message: req.body.message
  });
  messageBody += "\n";
  fs.appendFileSync(__dirname + '/messages.txt', messageBody);
  res.redirect('/');
}


module.exports = { getUsers, postMessage, postFilter };
