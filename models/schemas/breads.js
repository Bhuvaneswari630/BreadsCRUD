const { Schema } = require('mongoose')

const breadSchema = new Schema({
    name: String,
    hasGluten: Boolean,
    image: String
})

const Bread = mongoose.model('Bread', breadSchema);

module.exports = Bread