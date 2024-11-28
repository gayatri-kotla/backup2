const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://gayatrikotla333:40L7ipLL8vBUsFWN@cluster0.dsfvy.mongodb.net/cluster', {
    // No deprecated options needed in recent versions
}).then(() => {
    console.log('MongoDB connected successfully.');

    // Define the schema and model
    const { Schema } = mongoose;

    const studentSchema = new Schema({
        name: String,
        age: Number,
        email: String,
    });

    const Student = mongoose.model('Student', studentSchema);

    // Create a new student
    const student = new Student({
        name: 'simon',
        age: 30,
        email: 'simon@abc.com'
    });

    // Save the student and close the connection afterward
    student.save()
        .then((result) => {
            console.log("Saved successfully: ", result);
            return mongoose.connection.close(); // Close connection after save
        })
        .catch((err) => {
            console.log('Error in saving document: ', err);
            return mongoose.connection.close(); // Close connection even if there's an error
        });

}).catch((err) => {
    console.error('Error connecting to MongoDB: ', err);
});
