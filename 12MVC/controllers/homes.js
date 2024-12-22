const Home = require("../models/home");


exports.getAddHome = (req, res, next) => {
  res.render('addHome', {pageTitle: 'Add Home to airbnb'});
}

exports.postAddHome = (req, res, next) => {
  const {houseName, price, location, rating, photoUrl} = req.body
  const home = new Home(houseName, price, location, rating, photoUrl)
  home.save()
  res.render('homeAdded', {pageTitle: 'Home Added Successfully'});
}

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render('home', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home'});
  })
  
}