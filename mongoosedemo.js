import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;
const mongoURI = 'mongodb://localhost:27017/studentDb';

mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define the studentsSchema
const studentsSchema = new mongoose.Schema({
  name: String,
  rollno: Number
  // You can add more fields here, like age, class, etc.
});

// Create the Mongoose model
const std = mongoose.model("student", studentsSchema);

const s1 = new std({
  name: "Gowtham",
  rollno: 252
});

s1.save()
  .then(savedStudent => {
    console.log('Student saved successfully:', savedStudent);
  })
  .catch(err => {
    console.error('Error saving student:', err);
  });

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

export {std};