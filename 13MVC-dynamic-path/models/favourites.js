const fs = require('fs')
const path = require('path')
const rootDir = require('../utils/pathUtil')

const favouriteDataPath = path.join(rootDir, 'data', 'favourite.json');

module.exports = class Favourite {
  static addToFavourite(homeId, callback) {
    Favourite.getFavourites((favourites) => {
            favourites.push(this)

            if(favourites.includes(homeId)){
              callback('home is already fvrt')
            } else {
              favourites.push(homeId)
              fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback)
            }
          
          })
  }

  static getFavourites(callback) {
    fs.readFile(favouriteDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : [])
    })
  }

  static deleteById(delHomeId, callback) {
    Favourite.getFavourites(homeIds => {
      homeIds = homeIds.filter(homeId => delHomeId !== homeId)
    fs.writeFile(favouriteDataPath, JSON.stringify(homeIds), callback)
    })
  }
}