const Home = require("../models/home");
const Favourite = require("../models/favourites");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render('store/index', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home'});
  })
}

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render('store/home-list', {registeredHomes: registeredHomes, pageTitle: 'Homes List'});
  })
}

exports.getBookings = (req, res, next) => {
    res.render('store/bookings', {pageTitle: 'My Bookings'});
  }

  exports.getFavouriteList = (req, res, next) => {
    Favourite.getFavourites(favourites => {
      Home.fetchAll((registeredHomes) => {
        const favouriteHomes = registeredHomes.filter(home => favourites.includes(home.id))
        res.render('store/favourite-list', {favouriteHomes: favouriteHomes, pageTitle: 'My Favourites'})});
    })
  
  }

  exports.postAddToFavourite = (req, res, next) => {
    console.log('came to favourite', req.body);
    Favourite.addToFavourite(req.body.id, error => {
      if(error) {
        console.log('error while marking favourite');
      }
      res.redirect('/favourites')
    })
    // res.redirect('/favourites')
  }

  exports.postRemoveFromFavourite = (req, res, next) => {
    console.log('came to favourite', req.body);
    const homeId = req.params.homeId
    Favourite.deleteById(homeId, error => {
      if(error) {
        console.log('error while removing from favourites', error);
        
      }
      res.redirect('/favourites')
    })
  }
  

  exports.getHomeDetails = (req, res, next) => {
    const homeId = req.params.homeId
    Home.findById(homeId, home => {
      if(!home) {
        console.log('home not found');
        res.redirect('/homes')
      }
      else {
        res.render('store/home-details', {
          home: home,
          pageTitle: 'Home Details'});
      }
    })
    
  }