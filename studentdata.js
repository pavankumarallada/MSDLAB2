// addStudents.js
import { std } from './mongoosedemo.js'; // Import the std model

import mongoose from 'mongoose';


// Wait for the database connection to be established before adding students
let dbReady = false;
mongoose.connection.once('open', () => {
  console.log('Database connection ready in addStudents.js');
  dbReady = true;
  addMoreStudents();
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error in addStudents.js:', err);
});

function addMoreStudents() {
  if (!dbReady) {
    console.log('Database not ready yet in addStudents.js, delaying...');
    setTimeout(addMoreStudents, 100); // Try again after a short delay
    return;
  }

  // Add multiple students
  const studentsToAdd = [
    { name: "Lakshmi", rollno: 254 },
    { name: "Venkatesh", rollno: 255 },
    { name: "Priya", rollno: 256 },
    { name: "Arjun", rollno: 257 },
    // Add more student objects here
  ];

  std.insertMany(studentsToAdd)
    .then(savedStudents => {
      console.log('Multiple students saved successfully (from addStudents.js):', savedStudents);
      mongoose.connection.close(); // Close the connection after adding data
    })
    .catch(err => {
      console.error('Error saving multiple students (from addStudents.js):', err);
      mongoose.connection.close(); // Close the connection even if there's an error
    });
}