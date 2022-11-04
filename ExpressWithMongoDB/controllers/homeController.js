const UserDetails = require('../models/userDetails');
const getHome = (req, res) => {
  res.render('index', { title: 'Home' });
};

const getLogin = (req, res) => {
  res.render('login', { title: 'Login' });
};

const postLogin = (req, res) => {
  console.log(req.user);
}

const getDashboard = (req, res) =>{
  res.render('dashboard', { title: 'Dashboard' })
}

const logOut = (req, res)=>{
  req.logout(()=>{
  console.log("Logging out!")
  });
  res.redirect('/');
}

const getRegister = (req, res) => {
  res.render('register', {title: 'register'});
}
const postRegister = (req, res) => {
  UserDetails.register({username: req.body.username, active: false}, req.body.password);
  console.log(req.body.username);
  console.log(req.body.password);
  res.redirect("/login");
}

module.exports = { getHome, getLogin, postLogin, getDashboard, logOut, getRegister, postRegister};
