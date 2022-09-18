const fs = require('fs');
const getForm = (req, res, next) => {
  res.render("create_cv");
  next();
}
module.exports = { getForm: getForm };
