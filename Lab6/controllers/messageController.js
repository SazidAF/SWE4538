const fs = require('fs');

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
const getMessage = (req, res) => {
  const content = fs.readFileSync(__dirname + '/messages.txt', {encoding:'utf-8', flag:'r'}).toString().split(/\r?\n/);
  content.pop();
//  console.log(JSON.parse(content[0]));
  res.redirect('/');
}

module.exports = { postMessage, getMessage};
