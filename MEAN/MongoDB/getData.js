const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gayatrikotla333:40L7ipLL8vBUsFWN@cluster0.dsfvy.mongodb.net/cluster', {});
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
});

const Student = mongoose.model('Student', studentSchema);

Student.find({ name: 'simon' }).then(students => {
    console.log(students);
});



