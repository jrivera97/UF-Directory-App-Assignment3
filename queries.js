const fs = require('fs'),
      mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      Listing = require('./ListingSchema.js'),
      config = require('./config.js');
// fixes promise warning
mongoose.Promise = global.Promise;
// useMongoCLient fixes warning about open()
mongoose.connect(config.db.uri, { useMongoClient: true });


/* Fill out these functions using Mongoose queries*/
var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
	 Listing.find({ code: 'LBW' }, function(err, data) {
    if (err) throw err;
    console.log(data);
  });

};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
	 Listing.findOneAndRemove({ code: 'CABL' }, function(err, data) {
    if (err) throw err;
    console.log(data);
  });
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
	 Listing.findOneAndUpdate({ code: 'PHL'},{address: '1275 Center Drive, Gainesville, FL 32611'}, function(err, data) {
	  if (err) throw err;
	  console.log(data);
	 });
};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
	 Listing.find({}, function(err, data) {
    if (err) throw err;
    console.log(data);
  })

};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
