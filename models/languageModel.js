const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const languageSchema = new Schema({
  languageName: String,
  nav: {
    projector: String,
    description: String,
    price: String,
    faq: String,
  },
  landingPage: {
    projectorRent: String,
    projectorEpson: String,
    optical: String,
    desButton: String,
    headingTitle: String,
    nameAndSecondName: String,
    comp: String,
    el: String,
    telephone: String,
  },
});

module.exports = {
  Language: mongoose.model("Language", languageSchema),
  languageSchema: languageSchema,
};
