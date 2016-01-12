var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var linkSchema = new Schema({
  url:    String,
  title:  String
});

module.exports = mongoose.model("Link", linkSchema);
