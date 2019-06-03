const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pictureSchema = new Schema({
  image: { data: Buffer, contentType: String }
});
const Picture = mongoose.model("Picture", pictureSchema);
module.exports = Picture;
