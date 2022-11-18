const fs = require('fs');

const postMessage = (req, res) => {
  const messageBody = JSON.stringify({
    sender: req.body.sender,
    receiver: req.body.receiver,
    message: req.body.message
  });
  fs.appendFileSync(__dirname + '/messages.txt', messageBody);
  res.redirect('/');
}

module.exports = { postMessage };
