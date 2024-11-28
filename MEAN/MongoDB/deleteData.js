const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gayatrikotla333:40L7ipLL8vBUsFWN@cluster0.dsfvy.mongodb.net/cluster', {});
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
});

const Student = mongoose.model('Student', studentSchema);

Student.deleteOne({ name: 'simon' })
    .then((result) => {
        console.log('Document deleted successfully: ', result);
    })
    .catch((err) => {
        console.log('Error deleting document: ', err);
    })