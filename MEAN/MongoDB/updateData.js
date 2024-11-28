const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gayatrikotla333:40L7ipLL8vBUsFWN@cluster0.dsfvy.mongodb.net/cluster', {});
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
});

const Student = mongoose.model('Student', studentSchema);

Student.updateOne({ name: 'simon' }, { age: 16 })
    .then((result) => {
        console.log('Documnet updated: ', result);
    }).catch((err) => {
        console.log('error in update ', err);
    })
