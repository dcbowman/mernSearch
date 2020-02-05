var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema ({
    id: Number,
    title_id: Number,
    award_year: Number,
    award_character: String,
    award_company: String,
    award_won: String
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = mongoose.model("Movies", movieSchema);

